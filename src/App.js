import React from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import Contador from './components/Contador';

function App() {

  const productos = [
    {
      id: 0,
      nombre: "banana",
      cantidad: 10
    },
    {
      id: 1,
      nombre: "manzana",
      cantidad: 0
    },
    {
      id: 2,
      nombre: "naranja",
      cantidad: 5
    },
    {
      id: 3,
      nombre: "durazno",
      cantidad: 1
    },
    {
      id: 4,
      nombre: "anana",
      cantidad: 0
    }
  ];

    const productosEnStock = () => productos.filter(producto => producto.cantidad > 0)

    const productosSinStock = () => productos.filter(producto => producto.cantidad === 0)
    
    const productosAReponerStock = () => productos.filter(producto => producto.cantidad === 1)

    const handleIncrement = ( parametro ) => {
      alert(parametro);
    }

  return (
    <div className="App">
      <header className="App-header">
        <Contador onIncrement={handleIncrement} />
        <ListaProductos titulo="Productos en stock" productos={productosEnStock()} />
        <ListaProductos titulo="Productos sin stock" productos={productosSinStock()} />
        <ListaProductos titulo="Productos a reponer" productos={productosAReponerStock()} />
        <ListaProductos titulo="Productos en oferta" productos={productos.filter( producto => producto.cantidad >= 5 )} />
      </header>
    </div>
  );
}

export default App;
