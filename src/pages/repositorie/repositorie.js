  import React, { Component } from 'react';
  import './repositorie.css';
  import RepoDetail from '../../elements/req/repoDetail'
  /**
  * Componente Repositório
  */

  class Repositorie extends Component {
    render() {
      return (
        <div className="App">
          <RepoDetail loginPerf={this.props.match.params.namePerf} nameRepo={this.props.match.params.nameRepo}></RepoDetail>
        </div>
      );
    }
  }

  export default Repositorie;
