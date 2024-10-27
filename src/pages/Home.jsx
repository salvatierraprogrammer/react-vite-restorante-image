// src/pages/Home.js
import React from 'react';
import ListMenu from '../component/ListMenu';
import { Typography, Container } from '@mui/material';
import ButtonSubir from '../component/ButtonSubir';
import ButtonDelivery from '../component/ButtonDelivery';
function Home() {
  return (
    <Container>
      <ListMenu />
      <ButtonDelivery/>
      <ButtonSubir/>
    </Container>
  );
}

export default Home;