
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


function Logo(props) {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" width="136.888" height="56.831"
      viewBox="0 0 136.888 56.831">
      <defs>
        <clipPath id="clip-path">
          <rect id="Background" width="71.776" height="56.831" rx="20" transform="translate(330 72)"
            fill="#fff" />
        </clipPath>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#2244f1" />
          <stop offset="1" stopColor="#4dffb4" />
        </linearGradient>
      </defs>
      <ellipse id="Elipse_4" data-name="Elipse 4" cx="17" cy="16.5" rx="17"
        ry="16.5" transform="translate(18.888 10)" fill="#fff" />
      <g id="Grupo_de_máscara_1" data-name="Grupo de máscara 1" transform="translate(-330 -72)"
        clipPath="url(#clip-path)">
        <g id="github-logo" transform="translate(337.472 72)">
          <path id="Caminho_10" data-name="Caminho 10" d="M28.457,28.265h-.083c-3.526,0-6.634-.893-8.47.793A4.639,4.639,0,0,0,18.339,32.6c0,5.482,4.393,6.156,10.034,6.156h.084c5.641,0,10.034-.674,10.034-6.156a4.638,4.638,0,0,0-1.564-3.543C35.09,27.372,31.984,28.265,28.457,28.265Zm-4.8,7.492c-1.073,0-1.944-1.205-1.944-2.692s.87-2.691,1.944-2.691,1.945,1.2,1.945,2.691S24.734,35.757,23.661,35.757Zm9.509,0c-1.074,0-1.945-1.205-1.945-2.692s.871-2.691,1.945-2.691,1.944,1.2,1.944,2.691S34.243,35.757,33.17,35.757ZM28.416,0A28.416,28.416,0,1,0,56.831,28.416,28.415,28.415,0,0,0,28.416,0Zm2.592,40.078-2.592,0-2.592,0c-2.251,0-11.167-.172-11.167-10.919a8.107,8.107,0,0,1,2.235-5.788,13.293,13.293,0,0,1,.948-6.62s2.709.3,6.808,3.11a16.182,16.182,0,0,1,3.768-.356,16.163,16.163,0,0,1,3.768.356c4.1-2.813,6.807-3.11,6.807-3.11a13.3,13.3,0,0,1,.949,6.62,8.106,8.106,0,0,1,2.235,5.788C42.175,39.906,33.259,40.078,31.007,40.078Z"
            fill="url(#linear-gradient)" />
        </g>
      </g>
      <text id="gisearch" transform="translate(106.888 33)" fill="#fff" font-size="13" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="-29.536" y="0">{props.nome}</tspan></text>
    </svg>


  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
