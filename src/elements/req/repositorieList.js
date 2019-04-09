import React from 'react';
import axios from 'axios';
import NavLink from 'react-router-dom/NavLink';
/**
* Arquivo de requisição da Lista de Repositorio procurado.
*/
export default class RepositorieList extends React.Component {
  state = {
    repo: [],
  }

  componentDidMount() {
    if (this.props.loginPerf){
      axios.get('https://api.github.com/search/repositories?q=user:'+this.props.loginPerf+'&sort=stars&order='+this.props.order)
      .then(res => {
        const repo = res.data.items;
        this.setState({ repo });
      })
    }
  }

  render(props) {
    if (this.props.loginPerf ){
      return (
        <div>
          <ul>
            { this.state.repo.map((repo,index) =>

              <li key={index} className={(index%2 ? 'odd':'even')}>

                <h3 class="tertiary-color azul">{repo.name} {repo.fork ? <b class="fork">(fork)</b> : null}</h3>

                <p class="bio-text">{repo.description}</p>
                <NavLink activeClassName="active" class="link-out" to={'/Repositorie/'+this.props.loginPerf+'/'+repo.name}>
                  Details
                </NavLink>
                <p class="star">{repo.stargazers_count}</p>
                <p class="fork-icon">{repo.forks_count}</p>
                <p class="language">{repo.language ? repo.language : <b>?</b> }</p>

              </li>)}
            </ul>
          </div>

        )
      }else{
        return (
          <div>
            <p>
              <h4>sem nenhum repo.</h4>
              <br/>
            </p>

          </div>
        )
      }
    }

  }
