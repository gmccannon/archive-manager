import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../icons/ziplogo.jpg';

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const activetab = location.pathname;

  const handleNavigate = (page) => {
    navigate(page);
  };

  return (
    <Box sx={{ mt: 18 }}>
      <AppBar position="fixed" sx={{ height: '6.5vh', width: '100%', backgroundColor: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '5vh', marginRight: '1vw' }} />
            <Typography variant="h6" component="div" sx={{ color: 'black', marginRight: '1vw' }}>
              Anything Archive
            </Typography>
            <Button
                onClick={ () => handleNavigate('/') }
                sx={{ color: activetab === '/' ? 'red' : 'black', fontWeight: 600 }}
              >
                Decompress
              </Button>
              <Button
                onClick={ () => handleNavigate('/compress') }
                sx={{ color: activetab === '/compress' ? 'red' : 'black', fontWeight: 600}}
              >
                Compress
              </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              sx={{ ml: 2, color: 'black' }}
              color="inherit"
              component="a"
              href="https://github.com/gmccannon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
