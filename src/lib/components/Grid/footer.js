import {
    GridFooterContainer,
    GridFooter
} from '@mui/x-data-grid-premium';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);
    if (!/\d/.test(keyValue)) event.preventDefault();
};

const Footer = ({ pagination, apiRef, tTranslate = (key) => key, totalRowCount }) => {
    const page = apiRef.current.state.pagination.paginationModel.page;
    const rowsPerPage = apiRef.current.state.pagination.paginationModel.pageSize;
    const totalRows = totalRowCount ?? apiRef.current.state.rows.totalRowCount;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const isPaginationEnabled = !!pagination && totalPages > 1;
    const { t: translate, i18n } = useTranslation();
    const tOpts = { t: translate, i18n };
    const [pageNumber, setPageNumber] = useState(page + 1);
    /* oxlint-disable react-doctor/rerender-state-only-in-handlers -- setState-during-render is the React-recommended pattern to sync derived state without a stale-frame useEffect */
    const [prevPage, setPrevPage] = useState(page);
    if (prevPage !== page) {
        setPrevPage(page);
        setPageNumber(page + 1);
    }
    /* oxlint-enable react-doctor/rerender-state-only-in-handlers */

    const handleChange = function (e) {
        let value = e.target?.value;
        if (value === '') {
            setPageNumber('');
        } else {
            value = parseInt(value);
            value = isNaN(value) || value < 1 ? 1 : value;
            setPageNumber(value);
        }
    };

    const onPageChange = function () {
        let targetPage = pageNumber === '' ? 1 : pageNumber;
        targetPage = Math.max(targetPage, 1);
        targetPage = Math.min(targetPage, totalPages);
        apiRef.current.setPage(targetPage - 1);
        setPageNumber(targetPage);
        if (pageNumber === '') {
            setPageNumber(1);
        }
    };

    return (
        <GridFooterContainer>
            <Box sx={{ pl: { xs: 1, sm: 5 }, display: 'flex', alignItems: 'center' }}>
                {pagination &&
                    <>
                        <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>{tTranslate('Jump to page', tOpts)}:</Typography>
                        <TextField
                            sx={{
                                width: { xs: 35, sm: 60 },
                                pl: 1,
                                '& input[type=number]::-webkit-inner-spin-button': {
                                    cursor: 'pointer'
                                },
                                '& input[type=number]::-webkit-outer-spin-button': {
                                    cursor: 'pointer'
                                }
                            }}
                            variant="standard"
                            type='number'
                            min={1}
                            value={pageNumber}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            disabled={!isPaginationEnabled}
                        />
                        <Button disabled={!isPaginationEnabled} size='small' onClick={onPageChange}>{tTranslate('Go', tOpts)}</Button>
                    </>
                }
            </Box>
            <GridFooter />
        </GridFooterContainer>
    );
};
export { Footer };