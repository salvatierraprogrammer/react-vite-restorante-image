import React from 'react';
import { List, ListItem, Typography, Divider, CircularProgress, Container } from '@mui/material';
import '@fontsource/lobster';
import { useGetPizzeriaFelipeQuery } from '../service/ecApi';
import CardMenu from './CardMenu';

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

    // Comprueba si hay un error o si está cargando
    if (isLoading) return  <Container
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
  </Container>;
    if (error) return <Typography>Error al cargar el menú.</Typography>;

    // Asegúrate de que pizzeriaData tenga la estructura que necesitas
    const menuItems = pizzeriaData || {};

    return (
        <div style={{ padding: '20px', backgroundColor: '#f7f1e3' }}>
            <CardMenu datos={pizzeriaData}/>
            <div id="menuCompleto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <Typography variant="h4" style={{ fontFamily: 'Lobster', color: '#d35400', textAlign: 'center' }}>
                    Menú
                </Typography>
            </div>
            {Object.entries(menuItems).map(([categoria, items]) => (
                <div key={categoria} id={categoria} style={{ marginTop: '30px' }} tabIndex="-1">
                    <Typography variant="h5" gutterBottom style={{ color: '#2c3e50' }}>
                        {iconMap[categoria] || '🍽️'} {/* Muestra el emoticono correspondiente */}
                        {categoria === 'platosDelDia' ? ' Plato del Día' : ` ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`}
                    </Typography>
                    <List>
                        {Object.entries(items).map(([tipo, item]) => (
                            <ListItem 
                                key={tipo} 
                                style={{ 
                                    padding: '10px 0', 
                                    backgroundColor: '#f7f1e3', 
                                    transition: 'background-color 0.3s ease' 
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0e6d2'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f7f1e3'}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <Typography variant="body1" style={{ color: '#34495e', fontWeight: 'bold' }}>
                                        {tipo}  {/* Aquí se muestra el nombre del plato */}
                                    </Typography>
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
                    <Divider style={{ margin: '10px 0', backgroundColor: '#d35400' }} />
                </div>
            ))}
        </div>
    );
}

export default ListMenu;