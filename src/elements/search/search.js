import React, { Component } from 'react';
import './search.css';
import Logo from '../svg/logo.js';
import { withRouter,NavLink } from "react-router-dom";
/**
* Componente Search (input text) no topo da Home.
*/

class Search extends Component {
  constructor(props) {
    super(props);

    // state text é para gravar o texto digitado no input.
    // state timeout é para o tempo de espera para começar a pesquisar.
    this.state = {text: '',timeout:0};


  };


  handleChange(event) {
    this.setState({ text: event.target.value });

    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {

      // O parametro passado para /Home/:perfId lá no router(index.js)
      this.props.history.push('/Home/'+this.state.text);
    }, 1000);
  }


  render() {
    return (

      <header class="main_header">
        <div>
          <h1 class="logo">
            <NavLink activeClassName="" class="" to='/Home'>
              <Logo nome="gisearch" state="normal"></Logo>
            </NavLink>
          </h1>

          <nav class="nav">
            <div class="nav-center">
              <input type="text" class="search-input" placeholder="Digite o nome" onKeyUp={this.handleChange.bind(this)}/>
              <a class="btn-green go" href={'/Home/'+this.state.text} >Go</a>
            </div>
          </nav>
        </div>
      </header>

    );
  }
}

export default withRouter(Search);
