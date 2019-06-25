  import React from 'react';
  import axios from 'axios';
  import RepositorieList from '../../elements/req/repositorieList'

  /**
  * Arquivo de requisição do Perfil selecionado.
  */

  export default class PerfilDetail extends React.Component {
    state = {
      /** Onde será salvo o objeto Perfil que veio da consulta. */
      perfil: [],

    }

    componentDidMount() {
      if (this.props.idPerf){
        axios.get(`https://api.github.com/user/`+this.props.idPerf)
        .then(res => {
          const perfil = res.data;
          this.setState({ perfil });

        })
      }
    }

    render(props) {
      /** Folha de estilo fora do css (apenas como exemplo) */
      const perfilGitGeral = {
        maxWidth: '520px',
        margin:'auto',
        lineHeight:'100px',
        background:'#fff',
        color:'#000',overflow:'hidden'
      };

      const perfilImg = {
        width: '100%',
        margin:'auto',
        overflow:'hidden'
      };
      const leftSide = {
        width: '40%',
        margin:'auto',
        float:'left',
        maxHeight: '206px',
        overflow: 'hidden'
      };
      const rightSide = {
        width: '60%',
        margin:'auto',
        float:'right',
        padding:10
      };
      const perfilBio = {
        width: '100%',
        margin:'auto',
        float:'left',
        padding:10
      };
      const geralCol = {
        width: '100%',
        margin:'auto',
        float:'left',
        textAlign: 'center',

      };
      const c3d10 = {
        width: '33.3%',
        margin:'auto',
        float:'left',
        textAlign:'center'
      };

      return (
        <div style={perfilGitGeral}>

          <div style={leftSide} class="">
            <img src={ this.state.perfil.avatar_url } alt="" style={perfilImg} />
          </div>
          <div style={rightSide}>


            <h2>{ this.state.perfil.login } </h2>
            <p>{ this.state.perfil.name } </p>
            <p>{ this.state.perfil.company } </p>
            <p>{ this.state.perfil.html_url } </p>
            <p>{ this.state.perfil.location } </p>
            <p>{ this.state.perfil.blog } </p>
          </div>


          <p style={perfilBio}>{this.state.perfil.bio } </p>
          <div style={geralCol}>
            <div style={c3d10}><p class="font-size-30">{this.state.perfil.followers} </p><p class="legend">Followers</p></div>
            <div style={c3d10}><p class="font-size-30">{this.state.perfil.following} </p><p class="legend"> Followings</p></div>
            <div style={c3d10}><p class="font-size-30">{this.state.perfil.public_repos} </p><p class="legend">Repositories</p></div>
          </div>

          <div style={geralCol} class="margin-top-30 padding-top-30 border-top">
            <h2>Repositories</h2>
            { this.props.order === "asc" ?
              <a href="desc" class="btn-green">Order by Stars ▲</a>
              :
              <a href="asc" class="btn-green">Order by Stars ▼</a>
            }


            <div style={geralCol} >
              { this.state.perfil && this.state.perfil.login
                ? <RepositorieList loginPerf={ this.state.perfil.login} order={this.props.order}></RepositorieList>
                : <div> Loading ... </div>
            }

          </div>
        </div>
      </div>

    )

  }

  }
