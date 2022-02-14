import React, { FC } from 'react';
import Header from './app/component/Header';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const App:FC = () => {
  return (
    <Container sx={{
      p: 0,
      }}>
      <Header/>
      <Outlet/>
    </Container>
  );
}

export default App;
