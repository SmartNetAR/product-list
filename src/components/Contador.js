import React from 'react';

class Contador extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            valorContador: 0,
            nombre: "Juan"
        }
    }

    cuenta = 0;

    handleChange = (e) => {
        console.log(e.target.value)
    }

    handleClick = (e) => {
        this.cuenta +=1;
        const nuevoValorContador = this.state.valorContador + 1;
        this.setState({ valorContador: nuevoValorContador })

        this.props.onIncrement( nuevoValorContador );
    }

    render() {
        return (
            <div>
                <input onChange={ this.handleChange } type="text"></input>
                <button onClick={ this.handleClick }> Contador </button>
                <h1>estado contador {this.state.valorContador}</h1>
            </div>
        )
    }

}

export default Contador;