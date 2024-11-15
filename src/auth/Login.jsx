import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { auth } from '../config/Firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ onLoginSuccess, onLogout }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // Manejo del modal
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);
  const handleOpenLogoutModal = () => setOpenLogoutModal(true);
  const handleCloseLogoutModal = () => setOpenLogoutModal(false);

  // Inicio de sesión con persistencia
  const handleSubmitLogin = () => {
    setPersistence(auth, browserLocalPersistence) // Configura persistencia local
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {
        alert('Inicio de sesión exitoso.');
        handleCloseLoginModal();
      })
      .catch((error) => {
        console.error('Error en el inicio de sesión:', error);
        setLoginError('Credenciales incorrectas. Inténtalo de nuevo.');
      });
  };

  // Cierre de sesión
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert('Has cerrado sesión exitosamente.');
        handleCloseLogoutModal();
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  // Observador de cambios en el estado del usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        onLoginSuccess(); // Notifica al componente padre que el usuario ha iniciado sesión
        navigate('/configurar'); // Redirige según tu lógica
      } else {
        setIsLoggedIn(false);
        onLogout(); // Notifica al componente padre que el usuario ha cerrado sesión
        navigate('/'); // Redirige a la página de inicio
      }
    });

    return () => unsubscribe(); // Limpia el observador al desmontar el componente
  }, [navigate, onLoginSuccess, onLogout]);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoggedIn ? (
          <Button variant="contained" onClick={handleOpenLogoutModal}>
            Cerrar Sesión
          </Button>
        ) : (
          <Button variant="contained" onClick={handleOpenLoginModal}>
            Iniciar Sesión
          </Button>
        )}
      </Box>

      {/* Modal para iniciar sesión */}
      <Modal open={openLoginModal} onClose={handleCloseLoginModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Iniciar Sesión
          </Typography>
          <TextField
            label="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          {loginError && <Typography color="error">{loginError}</Typography>}
          <Button variant="contained" onClick={handleSubmitLogin}>
            Iniciar Sesión
          </Button>
        </Box>
      </Modal>

      {/* Modal para confirmar cierre de sesión */}
      <Modal open={openLogoutModal} onClose={handleCloseLogoutModal}>
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
          <Typography variant="h6" gutterBottom>
            Confirmar Cierre de Sesión
          </Typography>
          <Typography variant="body1">
            ¿Estás seguro de que deseas cerrar sesión?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="contained" onClick={handleLogout}>
              Sí
            </Button>
            <Button variant="outlined" onClick={handleCloseLogoutModal}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Login;