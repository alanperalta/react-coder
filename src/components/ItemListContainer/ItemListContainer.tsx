import React from 'react';
import { Item } from '../../types/Item';
import { ItemCart } from '../../types/ItemCart';
import ItemCount from '../ItemCount/ItemCount';

type ItemListContainerProps = {
  items: Array<Item>;
}

const containerStyle = {
  color: 'red'
}

const ItemListContainer = ({ items }: ItemListContainerProps) => {

  const handleAddItem = (itemCart: ItemCart) => {
    alert(`Se agregaron ${itemCart.qty} ${itemCart.item.name}`);
  }

  return (
    <div style={containerStyle}>
      {items.map(item => <ItemCount item={item} onAdd={handleAddItem} key={item.id} />)}
    </div>
  )
}

export default ItemListContainer
