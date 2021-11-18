import React, { useEffect, useState } from 'react';
import { Item } from '../../types/Item';
import ItemList from '../ItemList/ItemList';
import { getItems } from '../../services/serviceData'


const containerStyle = {
  color: 'red'
}

const ItemListContainer = () => {

  const [items, setItems] = useState(Array<Item>())
  useEffect(() => {
    async function getData() {
      const responseData = await getItems();
      setItems(responseData);
    }
    getData();
  }, []);

  return (
    <div style={containerStyle}>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
