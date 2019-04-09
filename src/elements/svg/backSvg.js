
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/**
* Componente SVG
* svg dentro de um Component
* para manipular ou animar.
*/
const styles = {
  cls:  {
    fontSize: 60,
    fontFamily: 'Poppins-Bold, Poppins'
  }
};


function BackSvg(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='119.881' height='55.553'
      viewBox='0 0 119.881 55.553'>
      <g id='Agrupar_46' data-name='Agrupar 46' transform='translate(-357.119 -78)'>
        <ellipse id='Elipse_3' data-name='Elipse 3' cx='27.776' cy='27.777' rx='27.776'
          ry='27.777' transform='rotate(90 167.337 245.337)' fill='#2244f1' />
        <path id='Caminho_9' data-name='Caminho 9' d='M8.654,22.526l6.633-6.633a1.178,1.178,0,1,0-1.665-1.665L9,18.849V1.184a1.184,1.184,0,1,0-2.368,0V18.839L2.012,14.218A1.178,1.178,0,0,0,.346,15.884l6.633,6.633a1.2,1.2,0,0,0,1.675.01Z'
          transform='rotate(90 148.96 247.405)' fill='#fff' />
        <text id="Voltar" transform="translate(456 111)" fill="#fff" font-size="13" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="-25" y="0">Voltar</tspan></text>
      </g>
    </svg>

  );
}

BackSvg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackSvg);
