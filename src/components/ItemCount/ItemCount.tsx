import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Item } from '../../types/Item';
import { ItemCart } from '../../types/ItemCart';

type ItemCountProps = {
  onAdd: (item: ItemCart) => void;
  item: Item;
}

const ItemCount = ({ onAdd, item }: ItemCountProps) => {
  const [qty, setQty] = useState(0);
  const [disabledAdd, setDisabledAdd] = useState(false);
  const [disabledRemove, setDisabledRemove] = useState(false);

  const handleQty = (isSum: boolean): void => {
    if (isSum && qty < item.stock) {
      setQty(qty + 1);
    } else if (!isSum && qty > 0) {
      setQty(qty - 1);
    }
  }

  useEffect(() => {
    if (qty === 0) {
      setDisabledRemove(true);
    } else {
      setDisabledRemove(false);
    }

    if (qty === item.stock) {
      setDisabledAdd(true);
    } else {
      setDisabledAdd(false);
    }
  }, [qty])

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, mb: 2, mt: 2, borderColor: 'red', border: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SKU: {item.id}
        </Typography>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button disabled={disabledRemove} onClick={() => handleQty(false)}>-</Button>
          {qty}
          <Button disabled={disabledAdd} onClick={() => handleQty(true)}>+</Button>
        </div>
        <Button variant="contained" disabled={qty === 0} onClick={() => onAdd({ item, qty })}>Agregar al carrito</Button>
      </CardActions>
    </Card>
  )
}

export default ItemCount
