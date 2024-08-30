import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../icons/ziplogo.jpg';

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const activetab = location.pathname;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleNavigate = (page) => {
    navigate(page);
    setMobileOpen(false); // Close mobile menu when navigating
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' }, // Hide buttons on mobile
                flexWrap: 'wrap',
                gap: '0.5vw',
              }}
            >
              {['/compress', '/', '/encrypt', '/decrypt', '/sign', '/verify', '/repair', '/split'].map(
                (path, index) => (
                  <Button
                    key={index}
                    onClick={() => handleNavigate(path)}
                    sx={{
                      color: activetab === path ? 'rgb(38, 91, 172)' : 'black',
                      fontWeight: 600,
                    }}
                  >
                    {path.substring(1) || 'Decompress'}
                  </Button>
                )
              )}
            </Box>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }} // Show menu icon on mobile
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
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
      {mobileOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: '6.5vh',
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1300,
            display: { xs: 'block', md: 'none' }, // Show on mobile
          }}
        >
          {['/compress', '/', '/encrypt', '/decrypt', '/sign', '/verify', '/repair', '/split'].map(
            (path, index) => (
              <Button
                key={index}
                onClick={() => handleNavigate(path)}
                sx={{
                  width: '100%',
                  textAlign: 'center',
                  color: activetab === path ? 'rgb(38, 91, 172)' : 'black',
                  fontWeight: 600,
                  padding: '1vh',
                }}
              >
                {path.substring(1) || 'Decompress'}
              </Button>
            )
          )}
        </Box>
      )}
    </Box>
  );
}
