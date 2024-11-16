import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { auth } from '../config/Firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

function Login({ onLoginSuccess, onLogout }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    // Verifica si el usuario ya está autenticado al cargar la página
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        if (onLoginSuccess) onLoginSuccess(); // Notifica al padre si ya está autenticado
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Limpia el listener al desmontar el componente
  }, [onLoginSuccess]);

  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);
  const handleOpenLogoutModal = () => setOpenLogoutModal(true);
  const handleCloseLogoutModal = () => setOpenLogoutModal(false);

  const handleSubmitLogin = () => {
    if (!email || !password) {
      setLoginError('Por favor completa todos los campos.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Inicio de sesión exitoso.');
        setIsLoggedIn(true);
        onLoginSuccess(); // Notifica al padre que el usuario inició sesión
        handleCloseLoginModal();
      })
      .catch((error) => {
        console.error('Error en el inicio de sesión:', error);
        switch (error.code) {
          case 'auth/user-not-found':
            setLoginError('Usuario no encontrado. Verifica tu correo.');
            break;
          case 'auth/wrong-password':
            setLoginError('Contraseña incorrecta.');
            break;
          default:
            setLoginError('Ocurrió un error inesperado. Intenta más tarde.');
        }
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        onLogout(); // Notifica al padre que el usuario cerró sesión
        alert('Has cerrado sesión exitosamente.');
        handleCloseLogoutModal();
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
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
            width: { xs: '90%', sm: 400 },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
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
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" onClick={handleSubmitLogin}>
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal de confirmación para cerrar sesión */}
      <Modal open={openLogoutModal} onClose={handleCloseLogoutModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 300 },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Confirmar Cierre de Sesión
          </Typography>
          <Typography variant="body1">
            ¿Estás seguro de que deseas cerrar sesión?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
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