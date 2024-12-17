import React, { useState } from 'react';
import { List, ListItem, Typography, Divider, CircularProgress, Container } from '@mui/material';
import '@fontsource/lobster';
import { useGetPizzeriaFelipeQuery } from '../service/ecApi';
import CardMenu from './CardMenu';
import ModalMenuItem from './ModalMenuItem';

const iconMap = {
    empanadas: '🥟',
    pizzas: '🍕',
    milanesas: '🍽️',
    sandwiches: '🥪',
    guarniciones: '🥗',
    postres: '🍰',
    minutas: '🍳',
    platosDelDia: '🍽️',
};

function ListMenu() {
    const { data: pizzeriaData, error, isLoading } = useGetPizzeriaFelipeQuery();
    const [selectedItem, setSelectedItem] = useState(null); // Estado para el modal
    const [modalOpen, setModalOpen] = useState(false);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    if (isLoading) return <Container><CircularProgress style={{ margin: '20px', color: '#f39c12' }} />
    <Typography variant="h5" style={{ textAlign: 'center', color: '#2c3e50' }}>
      Cargando el menú, por favor espera...
    </Typography></Container>;
    if (error) return <Typography>Error al cargar el menú.</Typography>;

    const menuItems = pizzeriaData || {};

    return (
        <div style={{ padding: '20px', backgroundColor: '#f7f1e3' }}>
            <CardMenu datos={pizzeriaData} />
            <div id="menuCompleto" style={{ textAlign: 'center', margin: '20px 0' }}>
                <Typography variant="h4" style={{ fontFamily: 'Lobster', color: '#d35400' }}>
                    Menú
                </Typography>
            </div>
            {Object.entries(menuItems).map(([categoria, items]) => (
                <div key={categoria} id={categoria} style={{ marginTop: '30px' }}>
                    <Typography variant="h5" gutterBottom style={{ color: '#2c3e50' }}>
                        {iconMap[categoria] || '🍽️'} {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </Typography>
                    <List>
                        {Object.entries(items).map(([tipo, item]) => (
                            <ListItem
                                key={tipo}
                                style={{ padding: '15px 0', cursor: 'pointer' }}
                                onClick={() => handleItemClick({ ...item, tipo })} // Abrir modal con datos
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={item.img || 'https://via.placeholder.com/50'}
                                        alt={tipo}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'cover', // Ajusta la imagen al tamaño especificado
                                            borderRadius: '8px',
                                            marginRight: '15px',
                                        }}
                                    />
                                    <div>
                                        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                            {tipo}
                                        </Typography>
                                        <Typography variant="body2">
                                            {item.descripcion || 'Descripción no disponible'}
                                        </Typography>
                                    </div>
                                </div>
                                    <Typography variant="body2" style={{ color: '#7f8c8d' }}>
                                        {categoria === 'empanadas'
                                            ? `X unidad: $${item.precio} | X Docena: $${item.precioDoc}`
                                            : categoria === 'pizzas'
                                            ? `Grande: $${item.grande} | Chica: $${item.precio}`
                                            : `$${item.precio}`}
                                    </Typography>
                                 
                                </div>
                            </ListItem>
                        ))}
                    </List>
                    <Divider style={{ margin: '10px 0' }} />
                </div>
            ))}
            <ModalMenuItem open={modalOpen} onClose={handleCloseModal} item={selectedItem} />
        </div>
    );
}

export default ListMenu;