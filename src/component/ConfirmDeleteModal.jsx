// ConfirmDeleteModal.js
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ConfirmDeleteModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6">Desea eliminar este elemento?</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', marginTop: 20 }}>
        <Button variant="contained" color="secondary" onClick={onConfirm}>
          Yes
        </Button>
        <Button variant="outlined" color="primary" onClick={onClose}>
          No
        </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;