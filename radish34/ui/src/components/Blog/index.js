import React from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core';
import SectionTitle from '../SectionTitle/Loadable';
import SingleBlog from '../SingleBlog/Loadable';
import './style.scss';

// images
import image1 from '../../images/blogs/img1.jpg';
import image2 from '../../images/blogs/img2.jpg';
import image3 from '../../images/blogs/img3.jpg';
import avarar1 from '../../images/blogs/avatar1.png';
import avarar2 from '../../images/blogs/avatar2.png';
import avarar3 from '../../images/blogs/avatar3.png';

const Blog = props => {
  const blogs = {
    items: [
      {
        image: image1,
        title: 'La mejor selección de temas de Wordpress y elegir 25 ideas.',
        name: 'Jenefar Wanjia ',
        badge: 'trending',
        avatar: avarar1,
        id: 1,
      },
      {
        image: image2,
        title: 'Cómo construir una tienda en línea en cinco minutos',
        badge: 'featured',
        name: 'Shophy Mole ',
        avatar: avarar2,
        id: 2,
      },
      {
        image: image3,
        title: 'Cómo elegir el mejor alojamiento para su comercio electrónico.',
        badge: 'new',
        name: 'Jimmy Watson',
        avatar: avarar3,
        id: 3,
      },
    ],
  };
  return (
    <Grid className="blogArea ptb-104">
      <Grid container spacing={4} className="container">
        <Grid item xs={12}>
          <SectionTitle
            title="Últimas noticias"
            subtitle="¡Construye y gana con tu tienda en línea con muchas características geniales y exclusivas incluidas con Edefy!"
          />
        </Grid>
        {blogs.items.map((item, i) => (
          <Grid key={i} item md={4} sm={6} xs={12}>
            <SingleBlog
              image={item.image}
              id={item.id}
              title={item.title}
              author={item.name}
              avatar={item.avatar}
              badge={item.badge}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default injectIntl(Blog);
