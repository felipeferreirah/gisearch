    import React from 'react';
    import axios from 'axios';
    /**
    * Arquivo de requisição do repositório selecionado.
    */
    export default class RepoDetail extends React.Component {
      state = {
        repo: []
      }

      componentDidMount() {
        if (this.props.loginPerf){
          axios.get('https://api.github.com/repos/'+this.props.loginPerf+'/'+this.props.nameRepo )

          .then(res => {
            const repo = res.data;

            this.setState({ repo });

          })
        }
      }

      render(props) {
        const perfilGitGeral = {
          maxWidth: '520px',
          margin:'auto',
          lineHeight:'100px',
          background:'#fff',
          color:'#000',overflow:'hidden'
        };
        const geralCol = {
          width: '100%',
          margin:'auto',
          float:'left',
          textAlign: 'center',

        };
        const repoItem = {
          height: 'calc(100vh - 143px)',
        minHeight:'300px',

        };
          console.log(this.state.repo);


        if (this.props.loginPerf ){
          return (
            <div style={perfilGitGeral}>

              <div style={geralCol} class="">
                <div style={geralCol} >
                <ul>
                <li style={repoItem}>
                  <h3 class="tertiary-color azul">{this.state.repo.name} {this.state.repo.fork ? <b class="fork">(fork)</b> : null}</h3>
                  <p class="bio-text">{this.state.repo.description}</p>
                  <a href={this.state.repo.html_url} target="_blank" rel="noopener noreferrer"class="link-out">Open repositorie</a><br/>
                  <p class="star">{this.state.repo.stargazers_count}</p>
                  <p class="watchers">{this.state.repo.watchers}</p>
                  <p class="fork-icon">{this.state.repo.forks_count}</p>
                  <p class="language">{this.state.repo.language ? this.state.repo.language : <b>?</b> }</p>
            </li>
            </ul>
              </div>
            </div>
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
      