import React from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import messages from './messages';
import ScrollTop from '../ScrollTop/Loadable';

import './style.scss';

// images
import logo from '../../images/logo.png';

const Footer = props => {
  return (
    <footer className="footerArea bgGray">
      <ScrollTop scrollStepInPx="50" delayInMs="16.66" />
      <Grid className="container" container spacing={4}>
        <Grid item xs={12}>
          <Grid className="newsleter">
            <h2>Síganos para más información</h2>
            <form>
              <input placeholder="Ingresa tu correo" type="text" />
              <Button>Suscribirse</Button>
            </form>
          </Grid>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Grid className="footerLogo">
            <img src={logo} alt="" />
            <p>
              Construye y gana con tu tienda en línea con muchas características exclusivas y
              geniales
            </p>
            <ul className="socialMedia">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item lg={3} md={2} sm={3} xs={12}>
          <h3 className="footertitle">Recursos</h3>
          <ul className="footerMenus">
            <li>
              <Link to="/aghgh">Política de privacidad</Link>
            </li>
            <li>
              <Link to="/aghgh">Términos y licencia</Link>
            </li>
            <li>
              <Link to="/aghgh">Política de soporte</Link>
            </li>
            <li>
              <Link to="/aghgh">Politica de reembolso</Link>
            </li>
          </ul>
        </Grid>
        <Grid item lg={3} md={2} sm={3} xs={12}>
          <h3 className="footertitle">Enlaces útiles</h3>
          <ul className="footerMenus">
            <li>
              <Link to="/about">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/aghgh">Enlace de ayuda</Link>
            </li>
            <li>
              <Link to="/aghgh">Términos y condiciones</Link>
            </li>
            <li>
              <Link to="/contact">Contacta con nosotros</Link>
            </li>
          </ul>
        </Grid>
        <Grid item lg={3} md={4} xs={12}>
          <div className="footerEarningWrap">
            <h3 className="footertitle">Ganancias del mercado</h3>
            <p>tienda en línea con muchas características interesantes y exclusivas Edefy</p>
            <ul>
              <li>
                <span>Artículos vendido</span>
                <h4>32567</h4>
              </li>
              <li>
                <span>Ganancias totales</span>
                <h4>603598</h4>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12}>
          <p className="copyright">© 2019 Edefy. Todos los derechos reservados</p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
