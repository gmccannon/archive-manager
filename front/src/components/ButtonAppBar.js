import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ mt: 8 }} >
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Anything to PDF
          </Typography>
          <Button
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
