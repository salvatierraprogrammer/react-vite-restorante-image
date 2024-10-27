import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        width: '89%', // Define el ancho del footer
        margin: '0 auto', // Centra el footer
        backgroundColor: '#f7f1e3', // Color de fondo que coincide con ListMenu
        color: '#34495e', // Color del texto para mejor legibilidad
        padding: '20px',
        marginTop: '20px',
        textAlign: 'center', // Centrar el texto
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">
            Contacto
          </Typography>
          {/* <Typography variant="body2">
            Email: contacto@ejemplo.com
          </Typography> */}
          <Typography variant="body2">
            Teléfono: (123) 456-7890
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">
            Ubicación
          </Typography>
          <Typography variant="body2">
            Moreno 1773, C1093 Cdad. Autónoma de Buenos Aires
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">
            Síguenos
          </Typography>
          <Typography variant="body2">
            Facebook | Twitter | Instagram
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6688051789706!2d-58.39119650000001!3d-34.6125355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadce54d9e9d%3A0xf7783a06acd3fa04!2sMoreno%201773%2C%20C1093%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1730063097187!5m2!1ses-419!2sar"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
}

export default Footer;