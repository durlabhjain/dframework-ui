import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogComponent = ({ open, onConfirm, title = "Confirm", onCancel, okText, cancelText, yesNo = false, children, showDialogActions = true, maxWidth = "md" }) => {
    okText = okText ? okText : (yesNo ? 'Yes' : 'Ok');
    cancelText = cancelText ? cancelText : (yesNo ? 'No' : 'Cancel');
    return (
        <Dialog
            open={open}
            onClose={onCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={maxWidth}
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{children}</DialogContentText>
            </DialogContent>
            {showDialogActions && (
                <DialogActions>
                    <Button onClick={onCancel}>{cancelText}</Button>
                    <Button onClick={onConfirm} autoFocus>{okText}</Button>
                </DialogActions>
            )}
        </Dialog>
    )
}
export { DialogComponent }
