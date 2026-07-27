import { useEffect, useState } from "react";
import { Box, Button, Typography, IconButton, Dialog, DialogContent } from "@mui/material";
import PageviewIcon from "@mui/icons-material/PageviewOutlined";
import { useSnackbar } from "../../SnackBar";
import utils from "../../utils";

/**
 * Defers the actual upload to whenever the surrounding Form is submitted: stores the
 * raw File object in the formik field value so it travels through the normal save
 * request as a multipart part (see httpRequest.js getFormData), instead of uploading
 * immediately like fields/fileUpload.js does for the single-document-link use case.
 */
function FilePicker({ column, field, formik, tOpts }) {
    const value = formik.values[field];
    const { formats } = column;
    const snackbar = useSnackbar();
    const [selectedName, setSelectedName] = useState(
        typeof File !== "undefined" && value instanceof File ? value.name : null
    );
    const [previewOpen, setPreviewOpen] = useState(false);

    useEffect(() => {
        setSelectedName(typeof File !== "undefined" && value instanceof File ? value.name : null);
    }, [value]);

    // column.previewUrl: ({ formik, value }) => string | null — builds the URL for an already-saved
    // image. The column owns the base URL, filename field, and "does an image actually exist" check,
    // since those vary per model (e.g. a computed filename that's non-empty even with no upload yet).
    const savedPreviewSrc = typeof column.previewUrl === "function" ? column.previewUrl({ formik, value }) : null;
    const [objectUrl, setObjectUrl] = useState(null);

    // Object URLs are only revoked here, not by the browser, so we must explicitly
    // release the previous one whenever value changes and on unmount to avoid leaking blobs.
    useEffect(() => {
        if (typeof File !== "undefined" && value instanceof File) {
            const url = URL.createObjectURL(value);
            setObjectUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        setObjectUrl(null);
    }, [value]);

    const previewSrc = objectUrl || savedPreviewSrc || null;

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (Array.isArray(formats) && file.type && !formats.includes(file.type)) {
            const t = tOpts?.t ?? ((key, opts) => opts?.defaultValue ?? key);
            const message = t("validation.invalidFileFormat", {
                defaultValue: "Invalid file format. Allowed formats: ${formats}."
            });
            snackbar.showError(utils.replaceTags(message, { formats: formats.join(", ") }));
            event.target.value = "";
            return;
        }
        formik.setFieldValue(field, file);
        setSelectedName(file.name);
        event.target.value = "";
    };

    const displayName = selectedName || (typeof value === "string" ? value : "");

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button variant="outlined" component="label">
                Choose File
                <input type="file" hidden accept={column.accept} aria-label="Choose file" onChange={handleFileChange} />
            </Button>
            {displayName && <Typography variant="body2">{displayName}</Typography>}
            {previewSrc && (
                <IconButton className="button-outline" aria-label="Preview file" onClick={() => setPreviewOpen(true)}>
                    <PageviewIcon />
                </IconButton>
            )}
            <Dialog open={previewOpen && Boolean(previewSrc)} onClose={() => setPreviewOpen(false)} maxWidth="md">
                <DialogContent>
                    {previewSrc && <img src={previewSrc} alt={displayName || "File preview"} style={{ maxWidth: 400, maxHeight: 400, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }} />}
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default FilePicker;
