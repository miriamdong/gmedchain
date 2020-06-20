import React, { useState, Fragment, setState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import SectionTitle from '../../SectionTitle/Loadable';
import { Grid, Tab, Tabs } from '@material-ui/core';
import SingleProduct from '../../SingleProduct/Loadable';
import './style.scss';
import SearchField from 'react-search-field';
import TypeChecker from 'typeco';
import _ from 'lodash';
// images
import image1 from '../../../images/products/p1.jpg';
import image2 from '../../../images/products/p2.jpg';
import image3 from '../../../images/products/p3.jpg';
import image4 from '../../../images/products/p4.jpg';
import image5 from '../../../images/products/p5.jpg';
import image6 from '../../../images/products/p6.jpg';

const products = [
  {
    name: 'Máscaras N95 disponibles',
    badge: 'trending',
    rating: 4.2,
    image: image2,
    author: 'Wpoceans',
    price: '$3.00',
    review: '05',
    id: 1,
  },
  {
    name: 'Máscaras N543',
    badge: 'featured',
    rating: 5,
    image: image1,
    author: 'Wpoceans',
    price: '$9.00',
    review: '105',
    id: 2,
  },
  {
    name: 'Máscaras Chang',
    badge: 'new',
    rating: 4,
    image: image3,
    author: 'Wong',
    price: '$1.00',
    review: '50',
    id: 3,
  },
  {
    name: 'Mascarillas quirúrgicas desechables',
    badge: 'featured',
    rating: 4.5,
    image: image4,
    author: 'HSecure',
    price: '$12.00',
    review: '25',
    id: 4,
  },
  {
    name: 'Máscaras Yeah',
    badge: 'new',
    rating: 1.5,
    image: image5,
    author: 'Chang',
    price: '$0.50',
    review: '87',
    id: 5,
  },
  {
    name: 'MÁSCARA ANTI-POLUCIÓN DE LA SONRISA',
    badge: 'trending',
    rating: 5,
    image: image6,
    author: 'P.e',
    price: '$16.00',
    review: '8774',
    id: 6,
  },
];

const getMatchedList = searchText => {
  if (TypeChecker.isEmpty(searchText)) return products;
  return products.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
};

const Products = () => {
  const [value, setValue] = useState(0);
  const [productList, setList] = useState(0);

  function onBasicExampleChange(value) {
    console.log(productList);
    setList(getMatchedList(value));
  }
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Grid className="productArea ptb-104">
      <Grid container spacing={4} className="container">
        <Grid item xs={12}>
          <SectionTitle
            title="Nuestros productos exclusivos"
            subtitle="¡Construye y gana con tu tienda en línea con muchas características geniales y exclusivas incluidas con Edefy!"
          />
        </Grid>
        <Grid item xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            classes={{
              root: 'productTabs',
              flexContainer: 'productTabContainer',
              indicator: 'productTabIndicator',
            }}
          >
            <Tab label="Mascaras" />
            <Tab label="Termómetros" />
            <Tab label="Ventiladores" />
            <Tab label="Hisopos de rebaño" />
            <Tab label="Kits de prueba COVID-19 de Flock" />
            <Tab label="Protección para los ojos" />
            <Tab label="PPE" />
          </Tabs>
          <SearchField placeholder="Search item" onChange={onBasicExampleChange} />
        </Grid>
        {value === 0 && !_.isEmpty(productList) && (
          <>
            {productList.map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 0 && _.isEmpty(productList) && (
          <>
            {products.map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 1 && !_.isEmpty(productList) && (
          <>
            {productList.slice(1, 6).map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 2 && !_.isEmpty(productList) && (
          <>
            {productList.slice(0, 4).map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 3 && !_.isEmpty(productList) && (
          <>
            {productList.slice(1, 5).map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 4 && !_.isEmpty(productList) && (
          <>
            {productList.map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 5 && !_.isEmpty(productList) && (
          <>
            {productList.slice(0, 3).map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 6 && !_.isEmpty(productList) && (
          <>
            {productList.slice(3, 6).map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
        {value === 7 && !_.isEmpty(productList) && (
          <>
            {productList.slice(0, 6).map((product, i) => (
              <Grid key={i} item lg={4} sm={6} xs={12}>
                <SingleProduct
                  id={product.id}
                  badge={product.badge}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  author={product.author}
                  review={product.review}
                  price={product.price}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Grid>
  );
};
export default Products;
