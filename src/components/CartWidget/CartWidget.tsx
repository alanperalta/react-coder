import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const cartIconStyle = {
  marginLeft: '40px',
  color: 'white'
}

const CartWidget = () => {
  return (
    <IconButton style={cartIconStyle}>
      <ShoppingCart/>
    </IconButton>
  )
}

export default CartWidget
