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
import Pricing from '../Pricing/Loadable';

const products = [
  {
    name: 'Masks N95',
    badge: 'trending',
    rating: 4.2,
    image: image1,
    author: 'Wpoceans',
    price: '$49.00',
    review: '05',
    id: 1,
  },
];

class PriceLanding extends Component {
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
        name: 'pricing',
      },
    ];

    return (
      <>
        <Helmet>
          <title>{this.state.product.name}</title>
        </Helmet>
        <Header className="headerAreaStyleTwo" logo={logo} />
        <Breadcumb
          title="ALCANCE A LOS COMPRADORES CREDIBLES GLOBALMENTE"
          menus={menus}
          style={{ padding: '0px' }}
        />

        <Pricing style={{ paddingTop: '0px' }} />

        <Footer />
      </>
    );
  }
}

export default PriceLanding;
