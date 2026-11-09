import { act, cleanup, render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { afterEach, expect, it } from 'vite-plus/test';
import { SnackbarProvider, useSnackbar } from '../src/lib/components/SnackBar/index.js';

afterEach(cleanup);

const Capture = ({ onSnackbar }) => {
    const snackbar = useSnackbar();
    useEffect(() => onSnackbar(snackbar), [snackbar, onSnackbar]);
    return null;
};

const renderWithSnackbar = () => {
    let current = null;
    render(<SnackbarProvider><Capture onSnackbar={value => { current = value; }} /></SnackbarProvider>);
    return () => current;
};

it('shows the title above the message instead of joining them with a colon', () => {
    const getSnackbar = renderWithSnackbar();
    act(() => getSnackbar().showError('Save failed', 'Group Name already exists. Please use a different name.'));
    const alert = screen.getByRole('alert');
    expect(alert.querySelector('.MuiAlertTitle-root').textContent).toBe('Save failed');
    expect(alert.textContent).toContain('Group Name already exists. Please use a different name.');
    expect(alert.textContent).not.toContain('Save failed:');
});

it('shows only the title when there is no message', () => {
    const getSnackbar = renderWithSnackbar();
    act(() => getSnackbar().showMessage('Saved'));
    const alert = screen.getByRole('alert');
    expect(alert.querySelector('.MuiAlertTitle-root')).toBeNull();
    expect(alert.textContent).toBe('Saved');
});

it('resolves error codes to the title and keeps the detail as the message', () => {
    const getSnackbar = renderWithSnackbar();
    act(() => getSnackbar().showErrorCode('error.an_error_occurred', 'Network timeout'));
    const alert = screen.getByRole('alert');
    expect(alert.querySelector('.MuiAlertTitle-root').textContent).toBeTruthy();
    expect(alert.textContent).toContain('Network timeout');
    expect(alert.textContent).not.toMatch(/: Network timeout/);
});
