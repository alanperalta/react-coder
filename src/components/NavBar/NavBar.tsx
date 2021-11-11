import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import CartWidget from '../CartWidget/CartWidget';


export default function ButtonAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isMobile? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          ) : null }
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LA TIENDITA
          </Typography>
            <IconButton color="inherit">
              Celulares
            </IconButton>
            <IconButton color="inherit">
              Audio y video
            </IconButton>
            <IconButton color="inherit">
              Gaming
            </IconButton>
            <IconButton color="inherit">
              Calefacción
            </IconButton>
            <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}