// Header.js
import React from 'react';
import { Typography } from '@mui/material';
import '@fontsource/lobster';
import logo from '/logo.png';
import fondoPizza from '/fondoPizza.jpeg';

function Header() {
  return (
    <header style={{ 
      backgroundImage: `url(${fondoPizza})`, 
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Añade un color de fondo semitransparente para el degradado
      padding: '30px 0', 
      borderBottom: '5px solid #d35400',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          fontFamily: 'Lobster',
          textAlign: 'center',
          color: '#ffffff',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          marginBottom: '10px',
        }}
      >
        Pizzería Felipe
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          borderRadius: '50%', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' 
        }}>
          <img
            src={logo}
            alt="Logo de Pizzería Felipe"
            style={{
              width: '200px',
              height: 'auto',
              borderRadius: '50%',
              maxWidth: '100%',
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;