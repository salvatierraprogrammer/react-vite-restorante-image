import React from 'react';
import { Modal, Box, TextField, Button, Avatar } from '@mui/material';

const ItemModal = ({ open, onClose, currentItem, onChange, onSave, selectedCategory }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Aquí puedes agregar lógica para cargar la imagen (por ejemplo, usando un servicio de almacenamiento en la nube)
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          target: {
            name: 'img', // Asegúrate de que el nombre de este campo coincida con el que usas para la imagen en currentItem
            value: file,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
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
          borderRadius: '10px',
        }}
      >
        {/* Campo para imagen */}
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <Avatar
            alt="Imagen del plato"
            src={
              currentItem.img
                ? typeof currentItem.img === 'string'
                  ? currentItem.img
                  : URL.createObjectURL(currentItem.img)
                : 'https://via.placeholder.com/200x150?text=No+Image'
            }
            sx={{
              width: '150px',
              height: '150px',
              margin: '0 auto 10px auto',
              objectFit: 'cover',
            }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button variant="outlined" component="span">
              {currentItem.img ? 'Cambiar Imagen' : 'Subir Imagen'}
            </Button>
          </label>
        </div>

        {/* Campos de texto */}
        <TextField
          label="Nombre del plato"
          name="tipo"
          value={currentItem.tipo}
          onChange={onChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Descripción"
          name="descripcion"
          value={currentItem.descripcion || ''}
          onChange={onChange}
          fullWidth
          margin="normal"
          multiline
          rows={3}
        />

        {/* Precio */}
        {!(selectedCategory === 'empanadas' || selectedCategory === 'pizzas') && (
          <TextField
            label="Precio"
            name="precio"
            value={currentItem.precio || ''}
            onChange={onChange}
            fullWidth
            margin="normal"
          />
        )}

        {/* Campos condicionales */}
        {selectedCategory === 'empanadas' && (
          <>
            <TextField
              label="Precio por Unidad"
              name="precioUnidad"
              value={currentItem.precioUnidad || ''}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Precio por Docena"
              name="precioDoc"
              value={currentItem.precioDocena || ''}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
          </>
        )}

        {selectedCategory === 'pizzas' && (
          <>
            <TextField
              label="Precio Chica"
              name="precioChica"
              value={currentItem.precioChica || ''}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Precio Grande"
              name="precioGrande"
              value={currentItem.precioGrande || ''}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
          </>
        )}

        {/* Botones */}
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={onSave}>
            {currentItem.tipo ? '💾 Guardar cambios' : '💾 Guardar'}
          </Button>
          <Button variant="contained" color="error" onClick={onClose}>
            ❌ Cancelar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ItemModal;