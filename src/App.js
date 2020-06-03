import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaProductos from './components/ListaProductos';

function App() {

  const productos = [
    {
      nombre: "banana",
      cantidad: 10
    },
    {
      nombre: "manzana",
      cantidad: 0
    },
    {
      nombre: "naranja",
      cantidad: 5
    },
    {
      nombre: "durazno",
      cantidad: 1
    },
    {
      nombre: "anana",
      cantidad: 0
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaProductos titulo="Productos en stock" productos={productos} />
      </header>
    </div>
  );
}

export default App;
