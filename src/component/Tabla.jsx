import React, { useEffect, useState } from 'react';
import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import ItemModal from './ItemModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useAddItemMutation, useUpdateItemMutation, useDeleteItemMutation } from '../service/ecApi'; // Ajusta el path
import { iconMap } from '../data/iconMap';
import {subirImagen}  from '../hook/SubirImg';


function Tabla({ data }) {
  const datos = data || {};
  const [items, setItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({ tipo: '', precio: '', precioDoc: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [addItem, { isLoading: isAdding }] = useAddItemMutation();
  const [updateItem, { isLoading: isUpdating }] = useUpdateItemMutation();
  const [deleteItem, { isLoading: isDeleting }] = useDeleteItemMutation();
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  
  const categories = items ? Object.keys(items) : [];

  

  useEffect(() => {
    const parseData = () => {
      const parsedItems = {};
      for (const category in datos) {
        parsedItems[category] = Object.entries(datos[category]).map(([tipo, details]) => ({
          tipo,
          ...details,
        }));
      }
      setItems(parsedItems);
    };

    parseData();
  }, [datos]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenModal = (item = { tipo: '', img: '', precio: '', precioDoc: '' }) => {
    setCurrentItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };



  const handleOpenConfirmDelete = (index) => {
    setDeleteIndex(index);
    setConfirmDeleteModal(true);
  };

  const handleCloseConfirmDelete = () => {
    setConfirmDeleteModal(false);
    setDeleteIndex(null);
  };

  const handleAddOrUpdateItem = async () => {
    setIsLoading(true); // Comienza la carga
    try {
      let imageUrl = currentItem.img; // Mantén la URL si ya existe
  
      // Si se subió una nueva imagen
      if (currentItem.img && currentItem.img instanceof File) {
        imageUrl = await subirImagen(currentItem.img); // Llama a la función utilitaria
        console.log("URL de la imagen subida:", imageUrl);
      }
  
      if (currentItem.tipo) {
        const updatedCategoryItems = [...(items[selectedCategory] || [])];
        const existingItemIndex = updatedCategoryItems.findIndex(
          (item) => item.tipo === currentItem.tipo
        );
  
        if (existingItemIndex >= 0) {
          // Editar elemento existente
          await updateItem({
            categoria: selectedCategory,
            tipo: currentItem.tipo,
            ...currentItem,
            img: imageUrl, // Guarda la URL actualizada de la imagen
          }).unwrap();
          updatedCategoryItems[existingItemIndex] = {
            ...currentItem,
            img: imageUrl,
          };
          setSuccessMessage("Elemento actualizado con éxito!");
        } else {
          // Agregar nuevo elemento
          await addItem({
            ...currentItem,
            categoria: selectedCategory,
            img: imageUrl,
          }).unwrap();
          updatedCategoryItems.push({ ...currentItem, img: imageUrl });
          setSuccessMessage("Elemento agregado con éxito!");
        }
  
        setItems({ ...items, [selectedCategory]: updatedCategoryItems }); // Actualiza la tabla
      } else {
        setErrorMessage('El campo "tipo" debe ser único y no estar vacío.');
      }
  
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error al guardar el elemento: ', error);
      setErrorMessage(error.message || 'Error al guardar el elemento.');
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false); // Finaliza la carga
      handleCloseModal();
      setCurrentItem({ tipo: '', precio: '', precioDoc: '' });
    }
  };
  
  const handleDeleteItem = async () => {
    setIsLoading(true); // Comienza la carga
    const itemToDelete = items[selectedCategory][deleteIndex];
    try {
      await deleteItem({ categoria: selectedCategory, tipo: itemToDelete.tipo }).unwrap();
  
      const updatedCategoryItems = items[selectedCategory].filter((_, i) => i !== deleteIndex);
      setItems({ ...items, [selectedCategory]: updatedCategoryItems }); // Actualiza la tabla localmente
  
      setSuccessMessage('Elemento eliminado con éxito!');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error al eliminar el elemento: ', error);
      setErrorMessage('Error al eliminar el elemento.');
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false); // Finaliza la carga
      handleCloseConfirmDelete();
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setSuccessMessage('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Menu Categorias</Typography>
      <div>
        {categories.map((category) => (
          <Button
            key={category}
            variant="contained"
            color="primary"
            onClick={() => handleCategorySelect(category)}
            style={{ margin: '5px' }}
          >
            {category} {iconMap[category] || '🍽️'} {/* Emoji por categoría */}
          </Button>
        ))}
      </div>

      {selectedCategory && (
  <div>
    {/* Botón Agregar Elemento a la derecha */}
    <Button
      variant="contained"
      color="success"
      onClick={() => handleOpenModal()}
      style={{ marginTop: '20px', marginBottom: '20px', float: 'right' }} // Ajusta el estilo para que esté a la derecha
    >
      {`Agregar a ${selectedCategory}`}
    </Button>

    <div style={{ clear: 'both' }} /> {/* Asegúrate de que el flujo de contenido se mantenga bien */}
   
    <Typography variant="h5" gutterBottom>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {iconMap[selectedCategory] || '🍽️'} {/* Muestra el ícono */}
        <span style={{ marginLeft: '8px' }}>{`${selectedCategory.toUpperCase()}`}</span>
      </span>
    </Typography>
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Imagen</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Descripción</TableCell>
            {/* Ajuste del encabezado de Precio según la categoría */}
            {selectedCategory === 'empanadas' ? (
              <>
                <TableCell>Por unid</TableCell>
                <TableCell>Por dec</TableCell>
              </>
            ) : selectedCategory === 'pizzas' ? (
              <>
                <TableCell>Chica</TableCell>
                <TableCell>Grande</TableCell>
              </>
            ) : (
              <TableCell>Precio</TableCell>
            )}
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={selectedCategory === 'pizzas' ? 6 : 5} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : items[selectedCategory]?.length > 0 ? (
            items[selectedCategory].map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={item.img || 'https://via.placeholder.com/50'}
                    alt={item.tipo}
                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </TableCell>
                <TableCell>{item.tipo}</TableCell>
                <TableCell>
                  {item.descripcion ? (
                    item.descripcion.length > 10
                      ? `${item.descripcion.substring(0, 10)}...`
                      : item.descripcion
                  ) : 'N/A'}
                </TableCell>
                {/* Contenido condicional para celdas de precio */}
                {selectedCategory === 'empanadas' ? (
                  <>
                    <TableCell>{item.precio || 'N/A'} $</TableCell>
                    <TableCell>{item.precioDoc || 'N/A'} $</TableCell>
                  </>
                ) : selectedCategory === 'pizzas' ? (
                  <>
                    <TableCell>{item.grande || 'N/A'} $</TableCell>
                    <TableCell>{item.precio || 'N/A'} $</TableCell>
                  </>
                ) : (
                  <TableCell>{item.precio || 'N/A'} $</TableCell>
                )}
                <TableCell>
                  <Button onClick={() => handleOpenModal(item)} color="primary">Editar</Button>
                  <Button onClick={() => handleOpenConfirmDelete(index)} color="secondary">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={selectedCategory === 'pizzas' ? 6 : 5} align="center">
                No hay elementos disponibles en esta categoría.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>

    <ItemModal 
      open={openModal} 
      onClose={handleCloseModal} 
      currentItem={currentItem} 
      onChange={handleChange} 
      onSave={handleAddOrUpdateItem} 
      selectedCategory={selectedCategory} // Nueva prop
    />

    <ConfirmDeleteModal 
      open={confirmDeleteModal} 
      onClose={handleCloseConfirmDelete} 
      onConfirm={handleDeleteItem} 
    />

    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
      <Alert onClose={handleCloseSnackbar} severity={successMessage ? 'success' : 'error'} sx={{ width: '100%' }}>
        {successMessage || errorMessage}
      </Alert>
    </Snackbar>
  </div>
)}

    </Container>
  );
}

export default Tabla;