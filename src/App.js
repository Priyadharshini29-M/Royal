import React from 'react';
import "./App.css";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}} />
      </Container>
    </React.Fragment>
  );
}

export default function App() {
  return (
   <>

   <Home/>
   
   
   </>
  );
}
