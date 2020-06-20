import React from 'react';
import { Grid } from '@material-ui/core';
import './style.scss';

// images
import preview from '../../images/preview.jpg';

const ItemDetails = () => {
  return (
    <Grid className="itemDetails">
      <img src={preview} alt="" className="previewImg" />
      <p>
        Marketify es una maravillosa plantilla de WordPress. Por otro lado, denunciamos con justa
        indignación y aversión a los hombres que están tan engañados y desmoralizados por los
        encantos del placer del momento, tan cegados por el deseo, que no pueden prever el dolor y
        la angustia que están por venir; e igual culpa pertenece a aquellos que fallan en su deber
        por debilidad de voluntad,
      </p>
      <p>
        que es lo mismo que decir a través de la reducción del trabajo y el dolor. Estos casos son
        perfectamente simples y sencillos de distinguir. En una hora libre, cuando nuestro poder de
        elección no se ve limitado y cuando nada impide que podamos hacer lo que más nos gusta, todo
        placer debe ser bienvenido y todo dolor evitado.
      </p>
      <p>
        Pero en ciertas circunstancias y debido a los reclamos del deber o las obligaciones de los
        negocios, con frecuencia ocurrirá que los placeres deben ser repudiados y las molestias
        aceptadas. Por lo tanto, el hombre sabio siempre mantiene en estos asuntos este principio de
        selección: rechaza los placeres para asegurar otros placeres mayores, o de lo contrario
        soporta dolores para evitar peores dolores ".
      </p>
      <h3>Archivos incluidos</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
      </ul>
      <h3>Fuentes y Créditos</h3>
      <ul>
        <li>Bootstrap v4.0.0</li>
        <li>jQuery v3.3.1</li>
        <li>Animate CSS</li>
        <li>FontAwesome</li>
        <li>isotop</li>
        <li>Countdown</li>
        <li>Owl carosel</li>
        <li>Smoothscroll</li>
      </ul>
      <h3>Fuentes e icono</h3>
      <ul>
        <li>
          Now - <a href="#">https://befonts.com/now-typeface.html</a>
        </li>
        <li>
          Open Sans - <a href="#">https://fonts.google.com/specimen/Open+Sans</a>
        </li>
        <li>
          Flaticon - <a href="#">https://www.flaticon.com/</a>
        </li>
      </ul>
    </Grid>
  );
};

export default ItemDetails;
