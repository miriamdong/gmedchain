import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import AuthorInfo from 'components/AuthorInfo/Loadable'
import Footer from 'components/Footer/Loadable'

const Author = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Author</title>
            </Helmet>
            <Header
                className="headerAreaStyleTwo"
                logo={logo}
            />
            <AuthorInfo />
            <Footer />
        </Fragment>
    );
}

export default Author;
