import React from 'react';

//Router imports
import { spring, AnimatedSwitch } from 'react-router-transition'
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import { AnimatedRoute } from 'react-router-transition';

//Global CSS
import './styles/style.css';
import './styles/mobile.css';

//Chamando todas as pages
import Home from './pages/home/home';
import Perfil from './pages/perfil/perfil';
import Repositorie from './pages/repositorie/repositorie';

//Chamando todos os elements
import Footer from './elements/footer/footer';
import Search from './elements/search/search';
import Back from './elements/back/back';

//Chamando todos os helpers
import ScrollToTop from './elements/helper/ScrollToTop.js';


//style para troca de Page
function mapStyles(styles) {
  return{
    position: styles.transitionIndex <= 1 ? 'relative' : 'absolute',
    width: '100%',
    height: '100%',
    transform:`translateX(${styles.offset}px`,
    opacity: styles.opacity,
    }
  }

  // Helper para o efeito de transição
  function glide(val) {
    return spring(val, {
      stiffness: 174,
      damping: 19,
    });
  }

  // Tipo de transição do AnimatedSwitch
  const glideTransition = {
    //Primeiro estado - atEnter
    atEnter: {
      offset: 200,
      opacity: 0,
      transitionIndex: 0,
    },
    //Segundo estado - atLeave
    atLeave: {
      offset: glide(-100),
      opacity: glide(0),
      transitionIndex: 2,
    },
    //Terceito estado - atActive
    atActive: {
      offset: glide(0),
      opacity: glide(1),
      transitionIndex: 1,
    },
  };
  //style para troca do Topo (Search / Back)
  function mapStylesBar(styles) {
    return {
      opacity: styles.opacity,
      transform: `translateY(${styles.offset}px)`,
      zIndex:  styles.opacity
    };
  }


  // Helper para o efeito de transição bounce
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }
  // Tipo de transição do AnimatedRoute Topo (Search / Back)
  const bounceTransitions = {
    atEnter: {
      opacity: 0,
      offset: 200,
    },
    atLeave: {
      opacity: bounce(0),
      offset: glide(-100),
    },
    atActive: {
      opacity: bounce(1),
      offset: glide(0),
    },
  };

// ******************************************************************************
// ************************* Explicando o Router ********************************
//
// <Route> ************* Passando os props para serem acessados pelos components.
// <Route> -> <div> **** Div que engloba todas as divs para (n) ultilidades.
// <ScrollToTop> ******* Helper para dar scroll depois da simulação do DOM.
// <AnimatedRoute> ***** Mostra ou esconde o component dependendo do path (url).
// <AnimatedSwitch> **** Responsavel pela troca de pages.

  const RouterApp = () => (

    <Router>
      <Route render={props => (

          <div class="content-geral black-theme active">
            <ScrollToTop />

            <AnimatedRoute className="route-nav" path={["/Home*", "/"]} exact component={Search} {...bounceTransitions} mapStyles={mapStylesBar} />
            <AnimatedRoute className="route-back" path={["/Perfil*", "/Repositorie*"]} exact component={Back} {...bounceTransitions} mapStyles={mapStylesBar} />


            <AnimatedSwitch

              {...glideTransition}
              mapStyles={mapStyles}
              className={"content-wrapper "}>

              <Route path="/" component={Home} exact="true"  />
              <Route path="/Home/:namePerf?" component={Home}  />
              <Route path="/Perfil/:idPerf?/:orderRepo?" component={Perfil}      />
              <Route path="/Repositorie/:namePerf?/:nameRepo?" component={Repositorie}    />

            </AnimatedSwitch>

            <AnimatedRoute className="rodape-geral" path={["/Home*", "/"]} component={Footer} {...bounceTransitions} mapStyles={mapStylesBar} />
          </div>

        )} />
      </Router>
    );

    ReactDOM.render(
      <RouterApp />
      , document.getElementById('root')
    );
