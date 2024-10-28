import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const iconMap = {
    empanadas: <span role="img" aria-label="empanadas" style={{ fontSize: '2em' }}>🥟</span>,
    pizzas: <span role="img" aria-label="pizzas" style={{ fontSize: '2em' }}>🍕</span>,
    milanesas: <span role="img" aria-label="milanesas" style={{ fontSize: '2em' }}>🍽️</span>,
    sandwiches: <span role="img" aria-label="sandwiches" style={{ fontSize: '2em' }}>🥪</span>,
    guarniciones: <span role="img" aria-label="guarniciones" style={{ fontSize: '2em' }}>🥗</span>,
    postres: <span role="img" aria-label="postres" style={{ fontSize: '2em' }}>🍰</span>,
    minutas: <span role="img" aria-label="minutas" style={{ fontSize: '2em' }}>🍳</span>,
    platosDelDia: <span role="img" aria-label="plato del día" style={{ fontSize: '2em' }}>🍽️</span>,
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
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Card 
                    style={{
                        minWidth: '150px',
                        maxWidth: '200px',
                        margin: '10px',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }} 
                    onClick={() => handleCardClick('menuCompleto')}
                >
                    <CardContent style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <span role="img" aria-label="menu completo" style={{ fontSize: '2em' }}>📜</span>
                        </div>
                        <Typography variant="h6" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                            Menú 
                        </Typography>
                        <Typography variant="body2" style={{ color: '#7f8c8d' }}>
                            completo
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            {Object.keys(datos[0]).map((categoria) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={categoria}>
                    <Card 
                        style={{
                            minWidth: '150px',
                            maxWidth: '200px',
                            margin: '10px',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
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