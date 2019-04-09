import React, { Component } from 'react';
import './back.css';
import BackSvg from '../svg/backSvg.js';
/**
 * Aquivo topo voltar
 * Esse arquivo é chamado pelo router quando não está no /Home/* ou /.
 */
class Back extends Component {
  constructor(props){
     super(props);
     this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.goBack();
}
  render() {
    return (
      <header class="main_header ">
          <div onClick={this.goBack} class="go-back">
            <BackSvg></BackSvg >
         </div>
      </header>

    );
  }
}

export default Back;
