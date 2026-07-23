import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
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

    useEffect(() => {
        setSelectedName(typeof File !== "undefined" && value instanceof File ? value.name : null);
    }, [value]);

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const fileExtension = `.${file.name.split(".").pop()}`.toLowerCase();
        if (Array.isArray(formats) && !formats.some((format) => format.toLowerCase() === fileExtension)) {
            const message = tOpts.t('validation.invalidFileFormat', {
                defaultValue: 'Invalid file format. Allowed formats: ${formats}.'
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
        </Box>
    );
}

export default FilePicker;
