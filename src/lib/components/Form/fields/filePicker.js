import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, IconButton, Dialog, DialogContent } from "@mui/material";
import PageviewIcon from "@mui/icons-material/PageviewOutlined";
import { useSnackbar } from "../../SnackBar";
import utils from "../../utils";

const CANVAS_PREVIEW_MAX_SIZE = 400;

/**
 * Defers the actual upload to whenever the surrounding Form is submitted: stores the
 * raw File object in the formik field value so it travels through the normal save
 * request as a multipart part (see httpRequest.js getFormData), instead of uploading
 * immediately like fields/fileUpload.js does for the single-document-link use case.
 */
function FilePicker({ column, field, formik, tOpts }) {
    const value = formik.values[field];
    const isSelectedFile = typeof File !== "undefined" && value instanceof File;
    const isSelectedImage = isSelectedFile && Boolean(value.type) && value.type.startsWith("image/");
    const { formats } = column;
    const snackbar = useSnackbar();
    const [selectedName, setSelectedName] = useState(isSelectedFile ? value.name : null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const canvasRef = useRef(null);
    const [hasCanvasPreview, setHasCanvasPreview] = useState(false);

    useEffect(() => {
        setSelectedName(isSelectedFile ? value.name : null);
    }, [isSelectedFile, value]);

    // column.previewUrl: ({ formik, value }) => string | null — builds the URL for an already-saved
    // image. The column owns the base URL, filename field, and "does an image actually exist" check,
    // since those vary per model (e.g. a computed filename that's non-empty even with no upload yet).
    // Skipped once a File is locally selected: previewUrl expects a saved filename/string, and the
    // canvas preview below covers the local-selection case instead.
    const savedPreviewSrc =
        typeof column.previewUrl === "function" && !isSelectedFile ? column.previewUrl({ formik, value }) : null;

    // Draws via createImageBitmap+canvas rather than a blob:/data: <img> URL, since a host app's CSP img-src can silently block those (blob: broke in production) but can't block a canvas draw.
    useEffect(() => {
        if (!isSelectedImage) {
            setHasCanvasPreview(false);
            return;
        }
        let cancelled = false;
        setHasCanvasPreview(false);

        if (typeof createImageBitmap !== "function") {
            return () => {
                cancelled = true;
            };
        }

        createImageBitmap(value)
            .then((bitmap) => {
                if (cancelled) {
                    bitmap.close();
                    return;
                }
                const canvas = canvasRef.current;
                const ctx = canvas?.getContext("2d");
                if (!canvas || !ctx) {
                    bitmap.close();
                    return;
                }
                const scale = Math.min(
                    CANVAS_PREVIEW_MAX_SIZE / bitmap.width,
                    CANVAS_PREVIEW_MAX_SIZE / bitmap.height,
                    1
                );
                const targetWidth = Math.round(bitmap.width * scale);
                const targetHeight = Math.round(bitmap.height * scale);
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
                bitmap.close();
                setHasCanvasPreview(true);
            })
            .catch(() => {
                if (!cancelled) setHasCanvasPreview(false);
            });
        return () => {
            cancelled = true;
        };
    }, [isSelectedImage, value]);

    const previewSrc = !isSelectedFile ? savedPreviewSrc : null;
    const hasPreview = hasCanvasPreview || Boolean(previewSrc);

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
            {hasPreview && (
                <IconButton className="button-outline" aria-label="Preview file" onClick={() => setPreviewOpen(true)}>
                    <PageviewIcon />
                </IconButton>
            )}
            {/* keepMounted: canvas must exist before the file is chosen since the draw effect fires on selection, not on dialog open */}
            <Dialog open={previewOpen && hasPreview} onClose={() => setPreviewOpen(false)} maxWidth="md" keepMounted>
                <DialogContent>
                    {isSelectedImage ? (
                        <canvas
                            ref={canvasRef}
                            role="img"
                            aria-label={displayName || "File preview"}
                            style={{ maxWidth: CANVAS_PREVIEW_MAX_SIZE, maxHeight: CANVAS_PREVIEW_MAX_SIZE, width: "auto", height: "auto", display: hasCanvasPreview ? "block" : "none" }}
                        >
                            {displayName || "File preview"}
                        </canvas>
                    ) : (
                        previewSrc && (
                            <img
                                src={previewSrc}
                                alt={displayName || "File preview"}
                                style={{ maxWidth: 400, maxHeight: 400, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
                            />
                        )
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default FilePicker;
