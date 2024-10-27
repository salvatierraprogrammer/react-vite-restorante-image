import React, { useState } from 'react';
import { Fab, Modal, Typography, Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
// import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
function ButtonDelivery() {
  const [open, setOpen] = useState(true); // Modal abierto por defecto
  const phoneNumber = '1234567890'; // Reemplaza este número por el número de teléfono real de WhatsApp
  const message = '¡Hola! Me gustaría hacer un pedido para delivery.'; // Mensaje inicial personalizado

  const handleClose = () => setOpen(false); // Cierra el modal

  return (
    <>
      {/* Modal de aviso */}
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock // Permitir desplazamiento de la página
        BackdropProps={{
          style: { backgroundColor: 'transparent' }, // Sin oscurecer el fondo
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            bottom: '140px', // Justo encima del botón de Delivery
            right: '20px',
            width: '250px',
            bgcolor: 'white',
            p: 2,
            borderRadius: '8px',
            boxShadow: 24,
            textAlign: 'center',
            zIndex: '1001',
          }}
        >
          <IconButton
            onClick={handleClose}
            style={{ position: 'absolute', top: '5px', right: '5px', color: '#d35400' }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="body1" color="textPrimary">
            🏍️ Delivery sin Cargo <br />
            <strong>De Lunes a Sábado</strong><br />
            De 8 a 22hs
          </Typography>
        </Box>
      </Modal>

      {/* Botón de WhatsApp para Delivery */}
      <Fab
        color="success"
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          backgroundColor: '#25D366',
          color: '#ffffff',
          zIndex: '1000',
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </>
  );
}

export default ButtonDelivery;