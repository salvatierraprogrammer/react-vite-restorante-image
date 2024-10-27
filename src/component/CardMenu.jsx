// CardMenu.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

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
            {/* Tarjeta de "Menú" */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                    style={{
                        minWidth: '200px', 
                        maxWidth: '300px', 
                        margin: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleCardClick('menu')} 
                >
                    <CardContent style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <span>📋</span> 
                        </div>
                        <Typography variant="h6" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                            Menú
                        </Typography>
                        <Typography variant="body2" style={{ color: '#7f8c8d' }}>
                            Explora nuestras opciones
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* Tarjetas de categorías */}
            {Object.keys(datos[0]).map((categoria) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={categoria}>
                    <Card 
                        style={{
                            minWidth: '200px', 
                            maxWidth: '300px', 
                            margin: '10px',
                            cursor: 'pointer'
                        }} 
                        onClick={() => handleCardClick(categoria)}
                    >
                        <CardContent style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                {iconMap[categoria] || <span>🔄</span>}
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