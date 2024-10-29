import React from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const ItemModal = ({ open, onClose, currentItem, onChange, onSave, selectedCategory }) => {
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
        }}
      >
           <TextField
            label="Nombre del plato"
            name="tipo"
            value={currentItem.tipo}
            onChange={onChange}
            fullWidth
            margin="normal"
          />
       
        {/* Hide this field if selectedCategory is 'empanadas' or 'pizzas' */}
        {!(selectedCategory === 'empanadas' || selectedCategory === 'pizzas') && (
       

        <TextField
          label="Precio"
          name="precio"
          value={currentItem.precio}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
      )}
        {/* Condicional para mostrar campos específicos de acuerdo a la categoría */}
        {selectedCategory === 'empanadas' && (
          <>
            <TextField
              label="Precio por Unidad"
              name="precio"
              value={currentItem.precioUnidad} // Use a unique name to avoid conflicts
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Precio por Docena"
              name="precioDoc"
              value={currentItem.precioDocena} // Use a unique name to avoid conflicts
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
              name="precio"
              value={currentItem.precioChica} // Use a unique name to avoid conflicts
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Precio Grande"
              name="grande"
              value={currentItem.precioGrande} // Use a unique name to avoid conflicts
              onChange={onChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
          <Button variant="contained" onClick={onSave}>
            {currentItem.tipo ? '💾 Guardar cambios' : '💾 Guardar'}
          </Button>
          <Button variant="contained" onClick={onClose}>
            ❌ Cancelar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ItemModal;