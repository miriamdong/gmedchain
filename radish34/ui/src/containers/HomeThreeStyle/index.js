import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import HeroSlider from 'components/HeroSlider/Loadable'
import Funfact from 'components/HomeTwo/Funfact/Loadable'
import HomeTwoNewlyAddProducts from 'components/HomeTwo/NewlyAddProducts/Loadable'
import HomeTwoProduct from 'components/HomeTwo/HomeTwoProduct/Loadable'
import CallToAction from 'components/HomeTwo/CallToAction/Loadable'
import Testmonial from 'components/Testmonial/Loadable'
import Pricing from 'components/Pricing/Loadable'
import Blog from 'components/Blog/Loadable'
import Footer from 'components/Footer/Loadable'
const HomeThreeStyle = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home Style Three</title>
            </Helmet>
            <Header
                className="headerAreaStyleTwo"
                logo={logo}
            />
            <HeroSlider />
            <Funfact />
            <HomeTwoNewlyAddProducts />
            <HomeTwoProduct />
            <CallToAction />
            <Testmonial />
            <Pricing />
            <Blog />
            <Footer />
        </Fragment>
    );
}

export default HomeThreeStyle;
