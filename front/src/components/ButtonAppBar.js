import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ mt: 12 }} >
      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: 'white' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ paddingLeft: '1vw', height: 40, marginRight: '1vw' }} />
          <Typography variant="h6" component="div" sx={{ paddingLeft: '.1vw', textAlign: 'Left', flexGrow: 1, color: 'Black'}}>
            Anything to PDF
          </Typography>
          <Button
            sx={{ paddingRight: '2vw', color: 'Black'}}
            color="inherit"
            component="a"
            href="https://github.com/gmccannon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
