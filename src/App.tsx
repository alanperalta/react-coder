import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Item } from './types/Item';

const App = () => {
  const items: Array<Item> = [
    { id: 1, name: 'Producto 1', description: 'Detalles del producto 1', stock: 20 },
    { id: 2, name: 'Producto 2', description: 'Detalles del producto 2', stock: 0 },
    { id: 3, name: 'Producto 3', description: 'Detalles del producto 3', stock: 5 },
    { id: 4, name: 'Producto 4', description: 'Detalles del producto 4', stock: 1 }
  ];
  return (
    <>
      <NavBar />
      <ItemListContainer items={items} />
    </>
  );
}

export default App;
