import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@mui/material';

function CategoryTable({ category, items, onAdd, onEdit, onDelete, setConfirmDeleteModal }) {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={onAdd}
        style={{ marginTop: '20px', marginBottom: '20px', float: 'right' }}
      >
        {`Agregar a ${category}`}
      </Button>
      <div style={{ clear: 'both' }} />
      <Typography variant="h5" gutterBottom>
        {category.toUpperCase()}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.length > 0 ? (
              items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      src={item.img || 'https://via.placeholder.com/50'}
                      alt={item.tipo}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </TableCell>
                  <TableCell>{item.tipo}</TableCell>
                  <TableCell>{item.descripcion || 'N/A'}</TableCell>
                  <TableCell>{item.precio || 'N/A'}</TableCell>
                  <TableCell>
                    <Button onClick={() => onEdit(item)} color="primary">Editar</Button>
                    <Button
                      onClick={() => {
                        onDelete(index);
                        setConfirmDeleteModal(true);
                      }}
                      color="secondary"
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No hay elementos disponibles en esta categoría.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CategoryTable;