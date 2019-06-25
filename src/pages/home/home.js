  import React, { Component } from 'react';
  import './home.css';
  import PeopleList from '../../elements/req/peopleList'
  /**
  * Componente Home
  */

  class Home extends Component {
    constructor(props) {
      super(props);

      this.state = {namePerf: this.props.match.params.namePerf};
    };

    //Verifica nova Prop (nextProps)
    //e salva no this.state.namePerf
    //na qual é passado para o <peopleList>
    componentWillReceiveProps(nextProps) {
      this.setState({namePerf:nextProps.match.params.namePerf})
    }

    render() {
      return (
        <div className="App">
          <div  class="geral-w-1450 topo-principal  ">
            <PeopleList namePerf={this.state.namePerf}></PeopleList>
          </div>
        </div>
      );
    }
  }

  export default Home;
