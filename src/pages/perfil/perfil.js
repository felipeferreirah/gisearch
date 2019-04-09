import React, { Component } from 'react';
import './perfil.css';
import PerfilDetail from '../../elements/req/perfilDetail'
/**
* Componente Perfil
*/

class Perfil extends Component {
    render() {

        return (
            <div class="App">

              <PerfilDetail idPerf={this.props.match.params.idPerf} order={this.props.match.params.orderRepo}></PerfilDetail>

            </div>
        );
    }
}

export default Perfil;
