import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import Hero from 'components/HomeMain/Hero/Loadable'
import Featured from 'components/HomeMain/Featured/Loadable'
import NewlyAddProducts from 'components/HomeMain/NewlyAddProducts/Loadable'
import Products from 'components/HomeMain/Products/Loadable'
import Activity from 'components/Activity/Loadable'
import Testmonial from 'components/Testmonial/Loadable'
import Pricing from 'components/Pricing/Loadable'
import Blog from 'components/Blog/Loadable'x
import Footer from 'components/Footer/Loadable'


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
            <NewlyAddProducts />
            <Products />
            <Activity />
            <Testmonial />
            <Pricing />
            <Blog />
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

export default compose(withConnect)(injectIntl(HomePage));
