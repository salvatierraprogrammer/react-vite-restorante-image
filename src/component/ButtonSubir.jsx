// src/component/ButtonSubir.js
import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material'; // Botón de acción flotante de Material-UI
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Ícono de flecha hacia arriba

function ButtonSubir() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detectar el scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 200); // Mostrar el botón si el scroll es mayor a 200px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpiar el evento
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    isVisible && (
      <Fab
        color="primary"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    )
  );
}

export default ButtonSubir;