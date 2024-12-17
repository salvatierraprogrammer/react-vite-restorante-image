import React from 'react';
import { Snackbar, Alert } from '@mui/material';

function SnackbarNotification({ open, onClose, successMessage, errorMessage }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={successMessage ? 'success' : 'error'} sx={{ width: '100%' }}>
        {successMessage || errorMessage}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarNotification;