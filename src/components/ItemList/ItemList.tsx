import React from 'react';
import { Item } from '../../types/Item';
import { ItemCart } from '../../types/ItemCart';
//Le pongo ItemComponent porque ya tengo el type que se llama Item
import ItemComponent from '../Item/Item';

type ItemListProps = {
  items: Array<Item>;
}

const containerStyle = {
  color: 'red'
}

const ItemList = ({ items }: ItemListProps) => {

  const handleAddItem = (itemCart: ItemCart) => {
    alert(`Se agregaron ${itemCart.qty} ${itemCart.item.title}`);
  }

  return (
    <div style={containerStyle}>
      {items.map(item => <ItemComponent item={item} onAdd={handleAddItem} key={item.id} />)}
    </div>
  )
}

export default ItemList