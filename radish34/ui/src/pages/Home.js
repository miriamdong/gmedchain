import React, { Fragment }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import HalfColumn from '../components/HalfColumn';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
//import messages from './messages';
import { Provider } from "react-redux";
// images 
import logo from '../images/logo.png'
import configureMockStore from "redux-mock-store";
// components 
import Header from '../components/Header/Loadable'
import Hero from '../components/HomeMain/Hero/Loadable'
import Featured from '../components/HomeMain/Featured/Loadable'
import NewlyAddProducts from '../components/HomeMain/NewlyAddProducts/Loadable'
import Products from '../components/HomeMain/Products/Loadable'
import Activity from '../components/Activity/Loadable'
import Testmonial from '../components/Testmonial/Loadable'
import Pricing from '../components/Pricing/Loadable'
import Blog from '../components/Blog/Loadable'
import Footer from '../components/Footer/Loadable'


const HomePage = () => {
    return (
          <Fragment>
            <Helmet>
                  <title>Home main</title>
            </Helmet>
              <Header
                  logo={logo}
              />
              <Hero />
              <Featured />
              <Products />
              <Activity />
              <Pricing />
           
              <Footer />
          </Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);


/*const useStyles = makeStyles(() => ({
  image: {
    margin: '2rem',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout scroll={false}>
      <HalfColumn rightColumn={false}>
        <div>Homepage</div>
      </HalfColumn>

      <HalfColumn rightColumn>
        <div className={classes.image}>
          <h1>img placeholder</h1>
        </div>
      </HalfColumn>
    </Layout>
  );
};
*/
export default HomePage;
