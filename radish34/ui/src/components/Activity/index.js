import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid } from '@material-ui/core';
import messages from './messages';
import './style.scss';

const Activity = ({ className }) => {
  const activitys = [
    {
      icon: 'flaticon-network',
      title: 'Productos asombrosos',
      value: 2025,
      className: 'product',
      id: 1,
    },
    {
      icon: 'flaticon-download',
      title: 'Descargas totales',
      className: 'download',
      value: 630168,
      id: 2,
    },
    {
      icon: 'flaticon-emoji',
      title: 'Clientes felices',
      className: 'customer',
      value: 35620,
      id: 3,
    },
    {
      icon: 'flaticon-team',
      title: 'Miembros del equipo',
      className: 'member',
      value: 100,
      id: 4,
    },
  ];

  return (
    <Grid className={`activityArea bgGray ${className}`}>
      <Grid className="container" container spacing={4}>
        {activitys.map(item => (
          <Grid key={item.id} item lg={3} sm={6} xs={12}>
            <div className={`activityItem ${item.className}`}>
              <i className={item.icon} />
              <h4>
                <span>+</span>
              </h4>

              <p>{item.title}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Activity;
