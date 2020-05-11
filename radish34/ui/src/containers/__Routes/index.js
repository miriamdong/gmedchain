import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes 
import PrivateRoute from 'containers/_PrivateRoute'

// components 

// homes 
import HomePage from 'containers/HomePage/Loadable'
import HomeStyleTwo from 'containers/HomeStyleTwo'
import HomeThreeStyle from 'containers/HomeThreeStyle/Loadable'
import AboutUs from 'containers/AboutUs/Loadable'
import Author from 'containers/Author/Loadable'
import CategoryPage from 'containers/CategoryPage/Loadable'
import ProductDetails from 'containers/ProductDetails/Loadable'
import BlogPage from 'containers/BlogPage/Loadable'
import BlogDetails from 'containers/BlogDetails/Loadable'
import ContactPage from 'containers/ContactPage/Loadable'
import ErrorPage from 'containers/ErrorPage/Loadable'
const Routes = () => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                exact
                path="/home-two"
                component={HomeStyleTwo}
            />
            <PrivateRoute
                exact
                path="/home-three"
                component={HomeThreeStyle}
            />
            <PrivateRoute
                exact
                path="/about"
                component={AboutUs}
            />
            <PrivateRoute
                exact
                path="/author"
                component={Author}
            />
            <PrivateRoute
                exact
                path="/products"
                component={CategoryPage}
            />
            <PrivateRoute
                exact
                path="/product-details/:id"
                component={ProductDetails}
            />
            <PrivateRoute
                exact
                path="/blog"
                component={BlogPage}
            />
            <PrivateRoute
                exact
                path="/blog-details/:id"
                component={BlogDetails}
            />
            <PrivateRoute
                exact
                path="/contact"
                component={ContactPage}
            />
            {/* <PublicRoute path="/maintenance" component={MaintenancePage} /> */}
            <Route component={ErrorPage} />
        </Switch>
    );
}
export default Routes