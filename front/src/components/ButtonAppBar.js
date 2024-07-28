import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ mt: 12 }} >
      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: 'white' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'Black'}}>
            Anything to PDF
          </Typography>
          <Button
            sx={{color: 'Black'}}
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
