import React from 'react';
import ListMenu from '../component/ListMenu';
import { Container } from '@mui/material';
import ButtonSubir from '../component/ButtonSubir';
import ButtonDelivery from '../component/ButtonDelivery';


function Home() {

  return (
    <Container style={{ padding: 0, backgroundColor: '#f7f1e3', minHeight: '100vh' }} disableGutters>
      <ListMenu />
      <ButtonDelivery />
      <ButtonSubir />
    
    </Container>
  );
}

export default Home;