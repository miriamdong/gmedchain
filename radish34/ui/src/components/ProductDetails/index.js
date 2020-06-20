import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Tab, Tabs, Button } from '@material-ui/core';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
// components
import Header from '../Header/Loadable';
import Breadcumb from '../Breadcumb/Loadable';
import PurchaseLicence from '../PurchaseLicence/Loadable';
import ProductInfo from '../ProductInfo/Loadable';
import ItemDetails from '../ItemDetails/Loadable';
import CommentItem from '../CommentItem/Loadable';
import PostComment from '../PostComment/Loadable';
import Support from '../Support/Loadable';
import Faq from '../Faq/Loadable';
import Review from '../Review/Loadable';

import Footer from '../Footer/Loadable';

import '../Followers/style.scss';
import './style.scss';

// images
import logo from '../../images/logo.png';
// images
import image1 from '../../images/products/p1.jpg';
import image2 from '../../images/products/p2.jpg';
import image3 from '../../images/products/p3.jpg';
import image4 from '../../images/products/p4.jpg';
import image5 from '../../images/products/p5.jpg';
import image6 from '../../images/products/p6.jpg';
import author from '../../images/user-profile-img.jpg';

const products = [
  {
    name: 'Máscaras N95',
    badge: 'trending',
    rating: 4.2,
    image: image2,
    author: 'Wpoceans',
    price: '$49.00',
    review: '05',
    id: 1,
  },
  {
    name: 'Sportyy - Gimnasio y tema deportivo',
    badge: 'featured',
    rating: 5,
    image: image1,
    author: 'Wpoceans',
    price: '$39.00',
    review: '105',
    id: 2,
  },
  {
    name: 'Meditouch - Página de destino médica',
    badge: 'new',
    rating: 4,
    image: image3,
    author: 'Wpoceans',
    price: '$29.00',
    review: '50',
    id: 3,
  },
  {
    name: 'Sportyy - Gimnasio y tema deportivo',
    badge: 'featured',
    rating: 4.5,
    image: image4,
    author: 'Wpoceans',
    price: '$12.00',
    review: '25',
    id: 4,
  },
  {
    name: 'Neon - Tema multipropósito de Wordpress',
    badge: 'new',
    rating: 1.5,
    image: image5,
    author: 'Wpoceans',
    price: '$25.00',
    review: '87',
    id: 5,
  },

  {
    name: 'Sportyy - Gimnasio y tema deportivo',
    badge: 'featured',
    rating: 5,
    image: image2,
    author: 'Wpoceans',
    price: '$39.00',
    review: '105',
    id: 10,
  },
  {
    name: 'Meditouch - Página de destino médica',
    badge: 'new',
    rating: 4,
    image: image3,
    author: 'Wpoceans',
    price: '$29.00',
    review: '50',
    id: 11,
  },
  {
    name: 'Sportyy - Gimnasio y tema deportivo',
    badge: 'featured',
    rating: 4.5,
    image: image4,
    author: 'Wpoceans',
    price: '$12.00',
    review: '25',
    id: 12,
  },
  {
    name: 'Lavelo - Tema de boda Wordpress',
    badge: 'trending',
    rating: 5,
    image: image6,
    author: 'Wpoceans',
    price: '$150.00',
    review: '8774',
    id: 6,
  },

  {
    name: 'Sportyy - Gimnasio y tema deportivo',
    badge: 'featured',
    rating: 4.5,
    image: image4,
    author: 'Wpoceans',
    price: '$12.00',
    review: '25',
    id: 7,
  },

  {
    name: 'Neon - Tema multipropósito de Wordpress',
    badge: 'new',
    rating: 1.5,
    image: image5,
    author: 'Wpoceans',
    price: '$25.00',
    review: '87',
    id: 8,
  },
  {
    name: 'Canlye - Multipurpose Wordpress Theme',
    badge: 'trending',
    rating: 4.2,
    image: image1,
    author: 'Wpoceans',
    price: '$49.00',
    review: '05',
    id: 9,
  },
  {
    name: 'Neon - Multipurpose Wordpress Theme',
    badge: 'new',
    rating: 1.5,
    image: image5,
    author: 'Wpoceans',
    price: '$25.00',
    review: '87',
    id: 13,
  },
  {
    name: 'Lavelo - Wedding Wordpress Theme',
    badge: 'trending',
    rating: 5,
    image: image6,
    author: 'Wpoceans',
    price: '$150.00',
    review: '8774',
    id: 15,
  },

  {
    name: 'Sportyy - Gym & Sports Theme',
    badge: 'featured',
    rating: 4.5,
    image: image4,
    author: 'Wpoceans',
    price: '$12.00',
    review: '25',
    id: 14,
  },

  {
    name: 'Neon - Multipurpose Wordpress Theme',
    badge: 'new',
    rating: 1.5,
    image: image5,
    author: 'Wpoceans',
    price: '$25.00',
    review: '87',
    id: 16,
  },

  {
    name: 'Neon - Multipurpose Wordpress Theme',
    badge: 'new',
    rating: 1.5,
    image: image5,
    author: 'Wpoceans',
    price: '$25.00',
    review: '87',
    id: 21,
  },
  {
    name: 'Lavelo - Wedding Wordpress Theme',
    badge: 'trending',
    rating: 5,
    image: image6,
    author: 'Wpoceans',
    price: '$150.00',
    review: '8774',
    id: 22,
  },

  {
    name: 'Sportyy - Gym & Sports Theme',
    badge: 'featured',
    rating: 4.5,
    image: image4,
    author: 'Wpoceans',
    price: '$12.00',
    review: '25',
    id: 23,
  },

  {
    name: 'Neon - Multipurpose Wordpress Theme',
    badge: 'new',
    rating: 1.5,
    image: image5,
    author: 'Wpoceans',
    price: '$25.00',
    review: '87',
    id: 24,
  },
  {
    name: 'Canlye - Multipurpose Wordpress Theme',
    badge: 'trending',
    rating: 4.2,
    image: image1,
    author: 'Wpoceans',
    price: '$49.00',
    review: '05',
    id: 17,
  },
  {
    name: 'Sportyy - Gym & Sports Theme',
    badge: 'featured',
    rating: 5,
    image: image2,
    author: 'Wpoceans',
    price: '$39.00',
    review: '105',
    id: 18,
  },
  {
    name: 'Meditouch - Medical Landing Page',
    badge: 'new',
    rating: 4,
    image: image3,
    author: 'Wpoceans',
    price: '$29.00',
    review: '50',
    id: 19,
  },
  {
    name: 'Sportyy - Gym & Sports Theme',
    badge: 'featured',
    rating: 4.5,
    image: image4,
    author: 'Wpoceans',
    price: '$12.00',
    review: '25',
    id: 20,
  },
];

class ProductDetails extends Component {
  state = {
    product: {},
    products: products,
    value: 0,
  };

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  componentDidMount() {
    const id = 1;
    const product = this.state.products.filter(b => b.id === id);
    if (product.length >= 0) {
      this.setState({
        product: product[0],
      });
    }
  }

  render() {
    const menus = [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: this.state.product.name,
      },
    ];

    return (
      <>
        <Helmet>
          <title>{this.state.product.name}</title>
        </Helmet>
        <Header className="headerAreaStyleTwo" logo={logo} />
        <Breadcumb title={this.state.product.name} menus={menus} />
        <Grid className="productDetailsArea ptb-104" style={{ padding: '20px' }}>
          <Grid container spacing={4} className="container">
            <Grid item md={8} xs={12}>
              <Grid className="productDetailsWrap">
                <Grid className="productDetailsImg">
                  <img src={this.state.product.image} alt="" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
              <aside className="productDetailsSidebar">
                <PurchaseLicence />
                <Grid className="widgetWrap widgetWrapContent">
                  <p>
                    <span className="name">
                      <i className="fi flaticon-supermarket" />
                      Total Sale
                    </span>
                    <span className="value">350</span>
                  </p>
                </Grid>
              </aside>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </>
    );
  }
}

export default ProductDetails;
