import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../icons/logo.png';

export default function TopBar() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoCompress = () => {
    navigate('/compress');
  };

  return (
    <Box sx={{ mt: 18 }}>
      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: 40, marginRight: '1vw' }} />
            <Typography variant="h6" component="div" sx={{ color: 'black', marginRight: '1vw' }}>
              Anything PDF
            </Typography>
            <Button
                onClick={handleGoHome}
                sx={{ my: 2, color: 'black', fontWeight: 600,}}
              >
                Convert
              </Button>
              <Button
                onClick={handleGoCompress}
                sx={{ my: 2, color: 'black', fontWeight: 600}}
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
