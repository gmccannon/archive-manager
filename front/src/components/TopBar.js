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
              Archive Manager
            </Typography>
              <Button
                  onClick={ () => handleNavigate('/compress') }
                  sx={{ color: activetab === '/compress' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600}}
                >
                  Compress
                </Button>
              <Button
                onClick={ () => handleNavigate('/') }
                sx={{ color: activetab === '/' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600 }}
              >
                Decompress
              </Button>
              <Button
                onClick={ () => handleNavigate('/encrypt') }
                sx={{ color: activetab === '/encrypt' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600}}
              >
                Encrypt
              </Button>
              <Button
                onClick={ () => handleNavigate('/decrypt') }
                sx={{ color: activetab === '/decrypt' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600}}
              >
                Decrypt
              </Button>
              <Button
                onClick={ () => handleNavigate('/sign') }
                sx={{ color: activetab === '/sign' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600}}
              >
                Sign
              </Button>
              <Button
                onClick={ () => handleNavigate('/verify') }
                sx={{ color: activetab === '/verify' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600}}
              >
                Verify
              </Button>
              <Button
                onClick={ () => handleNavigate('/repair') }
                sx={{ color: activetab === '/repair' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600}}
              >
                Repair
              </Button>
              <Button
                onClick={ () => handleNavigate('/split') }
                sx={{ color: activetab === '/split' ? 'rgb(38, 91, 172)' : 'black', fontWeight: 600}}
              >
                Split
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
