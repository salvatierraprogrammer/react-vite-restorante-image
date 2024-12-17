import React from 'react';
import { Modal, Box, Typography, Button, Stack, Divider, Grid } from '@mui/material';

const ModalMenuItem = ({ open, onClose, item }) => {
    if (!item) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 6,
                    borderRadius: 3,
                    overflow: 'hidden',
                    width: { xs: '90%', sm: 400, md: 450 }, // Ajustes responsivos
                    maxWidth: '95%',
                    backgroundColor: '#f7f1e3',
                }}
            >
                {/* Imagen de cabecera */}
                <Box
                    component="img"
                    src={item.img || 'https://via.placeholder.com/400x200?text=No+Image'}
                    alt={item.tipo || 'Sin imagen'}
                    sx={{
                        width: '100%',
                        height: { xs: '150px', sm: '200px', md: '250px' }, // Altura responsiva
                        objectFit: 'cover',
                    }}
                />

                {/* Contenido principal */}
                <Box p={{ xs: 2, sm: 3 }}>
                    <Stack spacing={2} alignItems="center">
                        <Typography
                            id="modal-title"
                            variant="h6"
                            fontWeight="bold"
                            color="primary"
                            textAlign="center"
                        >
                            {item.tipo || 'Sin nombre'}
                        </Typography>

                        <Divider flexItem />

                        <Typography
                            id="modal-description"
                            variant="body2"
                            color="text.secondary"
                            textAlign="center"
                        >
                            {item.descripcion || 'Descripción no disponible'}
                        </Typography>

                        <Typography
                            variant="h6"
                            fontWeight="medium"
                            color="success.main"
                        >
                            {`Precio: $${item.precio || 'N/A'}`}
                        </Typography>
                    </Stack>
                </Box>

                {/* Botones de acción */}
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{
                        p: { xs: 2, sm: 2 },
                        bgcolor: 'grey.100',
                        backgroundColor: '#f7f1e3',
                    }}
                >
                    <Grid item xs={12} sm={5}>
                        <Button
                            fullWidth
                            onClick={onClose}
                            variant="outlined"
                            color="secondary"
                            sx={{
                                '&:hover': { bgcolor: 'secondary.light' },
                            }}
                        >
                            Cancelar
                        </Button>
                    </Grid>
                    {/* <Grid item xs={12} sm={5}>
                        <Button
                            fullWidth
                            onClick={onClose}
                            variant="contained"
                            color="primary"
                            sx={{
                                '&:hover': { boxShadow: 4 },
                            }}
                        >
                            Aceptar
                        </Button>
                    </Grid> */}
                </Grid>
            </Box>
        </Modal>
    );
};

export default ModalMenuItem;