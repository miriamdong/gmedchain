import React from 'react';
import { injectIntl } from 'react-intl';
import { Grid } from '@material-ui/core';
import messages from './messages';
import './style.scss';

const featureds = [
  {
    title: 'Adquisiciones seguras',
    text:
      'Con una mayor transparencia, los compradores pueden buscar fuentes éticas que minimicen su huella ambiental.',
    color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
    icon: 'flaticon-ui',
    id: 1,
  },
  {
    title: 'Logística inteligente',
    text:
      '"Contratos Inteligentes" crea confianza en el flujo de trabajo de documentos digitalizados y mejora la eficiencia para ahorrar en costos laborales y capital de trabajo.',
    color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
    icon: 'flaticon-support',
    id: 2,
  },
  {
    title: 'Analítica avanzada',
    text:
      'La cadena de suministro conectada impulsada por inteligencia artificial, big data y aprendizaje automático tiene visibilidad en tiempo real para elaborar estrategias y mitigar riesgos.',
    color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
    icon: 'flaticon-rocket',
    id: 3,
  },
];

const Featured = () => {
  return (
    <Grid className="featuredArea ptb-104">
      <Grid container spacing={4} className="container">
        {featureds.map((item, i) => (
          <Grid key={i} item md={4} sm={6} xs={12}>
            <Grid className="featuredItem">
              <i style={{ background: item.color }} className={`fi ${item.icon}`} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Featured;
