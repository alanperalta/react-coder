import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings="Bienvenido a la tienda"/>
    </>
  );
}

export default App;
