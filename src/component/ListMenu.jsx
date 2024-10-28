// ListMenu.js
import React from 'react';
import { List, ListItem, Typography, Divider } from '@mui/material';
import '@fontsource/lobster';
import logo from '/logo.png';
import CardMenu from './CardMenu';
import { datos } from '../data/datos';

function ListMenu() {
  const menuItems = datos[0];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f7f1e3' }}>
      
      <CardMenu datos={datos} />
      <h1>Menu</h1>
      {Object.keys(menuItems).map((categoria) => (
        <div key={categoria} id={categoria} style={{ marginTop: '30px' }}>
          <Typography variant="h5" gutterBottom style={{ color: '#2c3e50' }}>
            {categoria === 'platosDelDia' ? 'Plato del Día' : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </Typography>
          <List>
            {menuItems[categoria].map((item, index) => (
              <ListItem key={index} style={{ padding: '10px 0', backgroundColor: '#f7f1e3' }}>
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