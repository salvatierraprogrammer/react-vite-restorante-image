import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { auth } from '../config/Firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login({ onLoginSuccess, onLogout }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);
  const handleOpenLogoutModal = () => setOpenLogoutModal(true);
  const handleCloseLogoutModal = () => setOpenLogoutModal(false);

  const handleSubmitLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Inicio de sesión exitoso.');
        setIsLoggedIn(true);
        onLoginSuccess(); // Llama a la función de éxito al iniciar sesión
        handleCloseLoginModal();
      })
      .catch((error) => {
        console.error("Error en el inicio de sesión:", error);
        setLoginError('Credenciales incorrectas. Inténtalo de nuevo.');
      });
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setIsLoggedIn(false);
        onLogout(); // Notifica al padre que se ha cerrado sesión
        alert('Has cerrado sesión exitosamente.');
        handleCloseLogoutModal();
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

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

      {/* Modal para ingresar credenciales de inicio de sesión */}
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
          {loginError && (
            <Typography color="error">{loginError}</Typography>
          )}
          <Button variant="contained" onClick={handleSubmitLogin}>
            Iniciar Sesión
          </Button>
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
            <Button variant="contained" onClick={handleLogout}>Sí</Button>
            <Button variant="outlined" onClick={handleCloseLogoutModal}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Login;