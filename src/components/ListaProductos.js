import React, { Component } from 'react';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
    }

    productosEnStock = () => this.props.productos.filter(fruta => fruta.cantidad > 0).map(fruta => <li>{fruta.nombre}</li>)

    productosSinStock = () => this.props.productos.filter(fruta => fruta.cantidad == 0)
    
    productosAReponerStock = () => this.props.productos.filter(fruta => fruta.cantidad == 1)


    render() {
        return (
            <div>
                <h2>
                    {this.props.titulo}
                </h2>

                <ul>
                    {this.productosEnStock()}
                </ul>

                <h2>
                    productos sin stock
                </h2>

                <ul>
                    {this.productosSinStock().map(fruta => <li>{fruta.nombre}</li>)}
                </ul>

                <h2>
                    productos a reponer
                </h2>

                <ul>
                    {this.productosAReponerStock().map(fruta => <li>{fruta.nombre}</li>)}
                </ul>
            </div>
        )
    }

}

export default ListaProductos;