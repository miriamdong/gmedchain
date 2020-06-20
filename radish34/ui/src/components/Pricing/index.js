import React from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core';
import messages from './messages';
import SectionTitle from '../SectionTitle/Loadable';

import './style.scss';

const pricings = [
  {
    name: 'Starter',
    icon: 'flaticon-plane',
    price: 69,
    color: '#8268f7',
    items: [
      '1 año de membresía',
      'Publicar productos - Ilimitado',
      'Recibir y responder consultas',
      'Soporte de verificación',
      'Soporte técnico ilimitado',
      'Gestión de registros',
      'Demos incluidas',
      'Perspectivas de la industria',
    ],
    btn: 'Elegir Individual',
    bg: 'linear-gradient(to top, #6168f3, #c968ff)',
    className: 'single',
    id: 1,
  },
  {
    name: 'Premium',
    icon: 'flaticon-airplane',
    price: 99,
    color: '#00c5d7',
    items: [
      'Incluir todo en Starter y',
      'Datos e informes',
      'Soporte del foro',
      'Transaccionar en la plataforma',
      'Soporte de seguimiento ilimitado',
      'Servicio al cliente personalizado',
      'Consulta de rendimiento',
      'Monetizar sus datos',
    ],
    btn: 'Elegir Multiple',
    className: 'multiple',
    bg: 'linear-gradient(to top, #00a7d5, #00ded8)',
    id: 2,
  },
  {
    name: 'Enterprise',
    icon: 'flaticon-rocket-1',
    price: 299,
    color: '#fbb17a',
    items: [
      'Incluir todo en Premium y',
      'Gasto de anuncios de palabras clave',
      'Acceso a funciones beta',
      'Subcuentas',
      'Soporte de soluciones de pago',
      'Creación de minisitios',
      'Acceso a B2B Insider',
      'Integración de IoT',
    ],
    btn: 'Elegir extendido',
    className: 'extended',
    bg: 'linear-gradient(to top, #f6d365, #fda085)',
    id: 1,
  },
];

const Pricing = () => {
  return (
    <Grid className="pricingArea  bgGray">
      <Grid className="container" spacing={4} container>
        <Grid item xs={12}>
          <SectionTitle subtitle="Elija un plan GMedChain Seller para lanzar su nuevo crecimiento comercial" />
        </Grid>
        {pricings.map((item, i) => (
          <Grid key={i} item md={4} sm={6} xs={12}>
            <Grid className={`pricingWrap ${item.className}`}>
              <i className={`fi ${item.icon}`} />
              <h3>{item.name}</h3>
              <h2>
                <span className="symble">$</span>
                {item.price}
                <span className="date" style={{ color: item.color }}>
                  Per Month
                </span>
              </h2>
              <ul>
                {item.items.map((list, i) => (
                  <li key={i}>
                    <span style={{ background: item.color }} /> {list}
                  </li>
                ))}
              </ul>
              <Button style={{ background: item.bg }} className="btn">
                {item.btn}
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Pricing;
