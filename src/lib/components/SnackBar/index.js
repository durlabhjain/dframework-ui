import React, { useState, useContext, createContext, useCallback, useMemo } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';

const SnackbarContext = createContext(null);
const ANCHOR_ORIGIN = { vertical: 'bottom', horizontal: 'center' };

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarProvider = ({ children }) => {
    const [snack, setSnack] = useState({ open: false, message: null, severity: null, onAction: null });

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

    const handleClose = () => {
        const { onAction } = snack;
        setSnack(prev => ({ ...prev, open: false, onAction: null }));
        if (onAction) onAction();
    };

    const contextValue = useMemo(() => ({ showMessage, showError }), [showMessage, showError]);

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

const useSnackbar = () => useContext(SnackbarContext);

export { SnackbarProvider, SnackbarContext, useSnackbar }