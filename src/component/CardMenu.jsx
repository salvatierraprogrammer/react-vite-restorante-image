import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// Define the icon mapping for each category
const iconMap = {
    empanadas: <span>🥟</span>,
    pizzas: <span>🍕</span>,
    milanesas: <span>🍽️</span>,
    sandwiches: <span>🥪</span>,
    guarniciones: <span>🥗</span>,
    postres: <span>🍰</span>,
    minutas: <span>🍳</span>,
    platosDelDia: <span>🍽️</span>
};

function CardMenu({ datos }) {
    const handleCardClick = (categoria) => {
        const section = document.getElementById(categoria);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '30px' }}>
            {Object.keys(datos[0]).map((categoria) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={categoria}>
                    <Card 
                        style={{
                            minWidth: '150px',  // Ajusta el tamaño mínimo
                            maxWidth: '200px',  // Ajusta el tamaño máximo
                            margin: '10px',
                            cursor: 'pointer' // Cambiar el cursor al pasar sobre la tarjeta
                        }} 
                        onClick={() => handleCardClick(categoria)}
                    >
                        <CardContent style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                {iconMap[categoria] || <span>🔄</span>} {/* Icono por defecto */}
                            </div>
                            <Typography variant="h6" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                            </Typography>
                            <Typography variant="body2" style={{ color: '#7f8c8d' }}>
                                {datos[0][categoria].length} platillos
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default CardMenu;