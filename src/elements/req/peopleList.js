  import React from 'react';
  import axios from 'axios';
  import NavLink from 'react-router-dom/NavLink';

  /**
  * Arquivo de requisição da Lista de Perfil procurado.
  */

  export default class PeopleList extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        persons: [],
        total:[],
        namePerf: this.props.namePerf
      }
    };

    componentDidMount() {

      if (this.props.namePerf){
        axios.get(`https://api.github.com/search/users?q=`+this.props.namePerf)
        .then(res => {
          const persons = res.data.items;
          const total = res.data.total_count;
          this.setState({ persons,total });
        })
      }
    }

    componentWillReceiveProps(nextProps) {

      if (nextProps.namePerf){
        axios.get(`https://api.github.com/search/users?q=`+nextProps.namePerf)
        .then(res => {
          const persons = res.data.items;
          const total = res.data.total_count;
          this.setState({ persons,total,  namePerf: nextProps.namePerf });
        })
      }

    }


    render(props) {
      const centerText = {
        maxWidth: "100%",
        margin:  "auto",
        height: "calc(100vh - 187px)",
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: "center",
        lineHeight: "80px",
        overflow:'hidden'
      };
      const divCenterText = {
        maxWidth: "700px",
        width:"100%",
        margin:"auto",
      };

      if (this.props.namePerf){
        return (
          <div>
            <h2 class="texto-resultado"> {this.state.total} resultados para {this.props.namePerf} :</h2>
            <br/>

            { this.state.persons.map((person,index) =>

              <div class="geral-perf" key={index}>

                <NavLink activeClassName="active" to={"/Perfil/"+person.id+"/"}>
                  <div className="perf-item">
                    <div className="perf-img">
                      <img src={person.avatar_url} alt=""/>
                    </div>
                    <div className="perf-text">
                      <h2>{person.login}</h2>
                      <p>{person.html_url}</p>

                    </div>
                  </div>
                </NavLink>
              </div>

            )}
          </div>

        )
      }else{
        return (
          <div style={divCenterText}>

            <h1 style={centerText}>  Pesquise qualquer perfil no GitHub.</h1>
            <br/>


          </div>
        )
      }
    }

  }
