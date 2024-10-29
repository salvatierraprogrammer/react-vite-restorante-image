import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import { useGetPizzeriaFelipeQuery } from '../service/ecApi'; 
import Tabla from '../component/Tabla';
import Login from '../auth/Login';

function Configurar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: pizzeriaData, error, isLoading } = useGetPizzeriaFelipeQuery();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Actualiza el estado al cerrar sesión
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Datos de pizzeria:", pizzeriaData); // Log data for debugging
    }
  }, [isLoggedIn, pizzeriaData]);

  if (isLoading) {
    return (
      <Container
        style={{
          padding: '20px',
          backgroundColor: '#f7f1e3',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress style={{ margin: '20px', color: '#f39c12' }} />
        <Typography variant="h5" style={{ textAlign: 'center', color: '#2c3e50' }}>
          Cargando el menú, por favor espera...
        </Typography>
      </Container>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container style={{ padding: 0, backgroundColor: '#f7f1e3', minHeight: '100vh' }} disableGutters>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: 20 }}>
        Configurar Menú
      </Typography>
      <Login onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
      {isLoggedIn && <Tabla data={pizzeriaData} />} 
    </Container>
  );
}

export default Configurar;