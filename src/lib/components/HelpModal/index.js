import React, { useCallback, useEffect, useState } from 'react';
import {
    Grid, Typography,
    Dialog, DialogContent, DialogTitle,
} from '@mui/material';
import { Replay, Close } from '@mui/icons-material';
import { useStateContext } from '../useRouter/StateProvider';

const RATIO = 16 / 9;

const HelpModal = () => {
    const [height, setHeight] = useState();
    const [loading, setLoading] = useState(false);
    const { stateData, setModal } = useStateContext();
    const openModal = stateData.modal;

    const updateHeight = useCallback(() => {
        let widthPercentage = document.getElementById('tutorial-iframe');
        if (widthPercentage) {
            widthPercentage = widthPercentage.offsetWidth;
            widthPercentage = widthPercentage / window.innerWidth;
        } else {
            widthPercentage = 0.9;
        }
        const calculatedHeight = window.innerWidth * widthPercentage * (1 / RATIO);
        const maxHeight = window.innerHeight - 180;
        setHeight(Math.min(calculatedHeight, maxHeight));
    }, []);

    useEffect(() => {
        if (openModal?.status) {
            setLoading(true);
            updateHeight();
        }
    }, [openModal, updateHeight]);

    /* oxlint-disable react-doctor/advanced-event-handler-refs -- updateHeight is stabilized by useCallback([]) so the listener is only added once */
    useEffect(() => {
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, [updateHeight]);
    /* oxlint-enable react-doctor/advanced-event-handler-refs */

    function resetIframe() {
        const iframe = document.getElementById('tutorial-iframe');
        iframe.src = openModal?.data?.url;
    }

    return (
        <div>
            {openModal?.status &&
                <Dialog fullWidth={true} maxWidth={"lg"} open={openModal.status} onClose={() => {
                    setModal({ status: false, data: {} })
                }} >
                    <DialogTitle className='pt-2 pb-0'>
                        <Grid container spacing={1}>
                            <Grid size={11} >
                                <Typography variant="h7" component='div'> {openModal?.data?.title || ''}</Typography>
                                <Typography variant="caption" component='div'>{openModal?.data?.subTitle || <>&nbsp;</>}</Typography>
                            </Grid>
                            <Grid className="text-right" size={1} >
                                <Replay className='cursor_pointer mt-2 mr-2' onClick={resetIframe} />
                                <Close className='cursor_pointer mt-2' onClick={() => {
                                    setModal({ status: false, data: {} })
                                }} />
                            </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogContent dividers>
                        {loading && <div>{"Loading..."}</div>}
                        {openModal?.data?.url && <iframe
                            id='tutorial-iframe'
                            style={{ width: '100%', height: `${height}px` }}
                            title={openModal?.data?.title || ''}
                            src={openModal?.data?.url}
                            allowFullScreen
                            frameBorder="0"
                            loading="lazy"
                            sandbox="allow-scripts allow-popups allow-forms allow-presentation"
                            onLoad={() => setLoading(false)}
                        />}
                    </DialogContent>
                </Dialog>}
        </div>
    );
};

export default HelpModal;
