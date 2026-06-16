import React, { useState, use, createContext, useCallback, useMemo } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import { resolveErrorMessage } from '../../errors';

const SnackbarContext = createContext(null);
const ANCHOR_ORIGIN = { vertical: 'bottom', horizontal: 'center' };

const Alert = ({ ref, ...props }) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

const SnackbarProvider = ({ children }) => {
    const [snack, setSnack] = useState({ open: false, message: null, severity: null, onAction: null });
    const { t } = useTranslation();


    const showMessage = useCallback((title, message, severity = "info", onAction) => {
        const titleStr = typeof title === 'string' ? title : String(title);
        const text = message
            ? `${titleStr}: ${typeof message === 'string' ? message : String(message)}`
            : titleStr;
        // onAction stored inside an object — React won't treat it as a state updater fn
        setSnack({ open: true, message: text, severity, onAction: onAction ?? null });
    }, []);

    const showError = useCallback((title, message, severity = "error", onAction) => {
        showMessage(title, message, severity, onAction);
    }, [showMessage]);

    const showErrorCode = useCallback((code, message, severity = "error", onAction) => {
        const resolvedTitle = resolveErrorMessage(code, t);
        showMessage(resolvedTitle, message, severity, onAction);
    }, [showMessage, t]);

    const handleClose = () => {
        const { onAction } = snack;
        setSnack(prev => ({ ...prev, open: false, onAction: null }));
        if (onAction) onAction();
    };

    const contextValue = useMemo(() => ({ showMessage, showError, showErrorCode }), [showMessage, showError, showErrorCode]);

    return (
        <>
            <SnackbarContext.Provider value={contextValue}>
                {children}
            </SnackbarContext.Provider>
            <Snackbar open={snack.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={ANCHOR_ORIGIN}>
                <Alert severity={snack.severity}>{snack.message}</Alert>
            </Snackbar>
        </>
    );
};

const useSnackbar = () => use(SnackbarContext);

export { SnackbarProvider, SnackbarContext, useSnackbar }