import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import './style.scss';

const ProductInfo = () => {
  return (
    <Grid className="widgetWrap productInfoWrap">
      <h3>
        <i className="fi flaticon-edit" /> Información del Producto
      </h3>
      <ul>
        <li>
          <span>Liberado :</span>
          <span>16 Enero 2018</span>
        </li>
        <li>
          <span>Última actualización :</span>
          <span>26 Junio 2019</span>
        </li>
        <li>
          <span>Version :</span>
          <span>1.2</span>
        </li>
        <li>
          <span>Categoría :</span>
          <span>Marketing &amp; Agency</span>
        </li>
        <li>
          <span>Diseño :</span>
          <span>Responsive</span>
        </li>
        <li>
          <span>Archivos incluidos :</span>
          <span>Html, CSS, JavaScript</span>
        </li>
        <li>
          <span>Browser :</span>
          <span>IE10, IE11, Firefox, Safari, Opera, Chrome5</span>
        </li>
        <li>
          <span>Software Version :</span>
          <span>WordPress 5.1.x, WordPress 5.0.x,WordPress 4.9.x, WordPress 4.8.x, </span>
        </li>
        <li>
          <span>Tags :</span>
          <span>Marketing, Agency,Business, Creative,Minimal.</span>
        </li>
      </ul>
    </Grid>
  );
};

export default ProductInfo;
