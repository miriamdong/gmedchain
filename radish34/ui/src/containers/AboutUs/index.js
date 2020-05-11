import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import AboutContent from 'components/AboutContent/Loadable'
import Team from 'components/Team/Loadable'
import Funfact from 'components/HomeTwo/Funfact/Loadable'
import Testmonial from 'components/Testmonial/Loadable'
import Footer from 'components/Footer/Loadable'


const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About Us',
    },
]
const AboutUs = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About us</title>
            </Helmet>
            <Header
                className="headerAreaStyleTwo"
                logo={logo}
            />
            <Breadcumb
                title="About Us"
                menus={menus}
            />
            <AboutContent />
            <Funfact className="funfactAreaStyleTwo" />
            <Team />
            <Testmonial />
            <Footer />
        </Fragment>
    );
}

export default AboutUs;
