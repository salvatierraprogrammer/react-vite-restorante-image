import React from 'react';
import { List, ListItem, Typography, Divider } from '@mui/material';
import '@fontsource/lobster';
import CardMenu from './CardMenu';
import { datos } from '../data/datos';

function ListMenu() {
    const menuItems = datos[0];

    return (
        <div style={{ padding: '20px', backgroundColor: '#f7f1e3' }}>
            <CardMenu datos={datos} />
  
            <div id="menuCompleto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <Typography variant="h4" style={{ fontFamily: 'Lobster', color: '#d35400', textAlign: 'center' }}>
                    Menú
                </Typography>
            </div>
            {Object.keys(menuItems).map((categoria) => (
                <div key={categoria} id={categoria} style={{ marginTop: '30px' }} tabIndex="-1">
                    <Typography variant="h5" gutterBottom style={{ color: '#2c3e50' }}>
                        {categoria === 'platosDelDia' ? 'Plato del Día' : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </Typography>
                    <List>
                        {menuItems[categoria].map((item, index) => (
                            <ListItem 
                                key={index} 
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
                                        {item.tipo}
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