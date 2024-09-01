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
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ mt: 18 }}>
      <AppBar position="fixed" sx={{ height: '4rem', width: '100%', backgroundColor: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '4rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '3rem', marginRight: '1rem' }} />
            <Typography variant="h6" component="div" sx={{ color: 'black', marginRight: '1rem' }}>
              ArchiveManager
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' }, // Hide buttons on mobile
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              {['/compress', '/', '/encrypt', '/decrypt', '/preview', '/verify', '/repair', '/split'].map(
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
          </Box>
          <IconButton
            sx={{ 
              display: { xs: 'flex', md: 'none' }, // Show menu icon on mobile
              color: 'black', 
              padding: '1rem', // Consistent padding
            }} 
            edge="end"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: '2rem' }} /> {/* Consistent icon size */}
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: '4rem',
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1300,
            display: { xs: 'block', md: 'none' }, // Show on mobile
          }}
        >
          {['/compress', '/', '/encrypt', '/decrypt', '/preview', '/verify', '/repair', '/split'].map(
            (path, index) => (
              <Button
                key={index}
                onClick={() => handleNavigate(path)}
                sx={{
                  width: '100%',
                  textAlign: 'center',
                  color: activetab === path ? 'rgb(38, 91, 172)' : 'black',
                  fontWeight: 600,
                  padding: '1rem', // Consistent padding
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
