import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'
import Portfolio from 'components/Portfolio/Loadable'
import CategoryList from 'components/CategoryList/Loadable'
import RelatedCategory from 'components/RelatedCategory/Loadable'
import './style.scss'

// images 
import logo from 'images/logo.png'

const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Download',
    },
    {
        name: 'Best React Templat',
    },
]

class CategoryPage extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Best React Templat</title>
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <Breadcumb
                    title="Best React Templat"
                    menus={menus}
                />
                <Grid className="productCategoryArea ptb-104">
                    <Grid
                        container
                        spacing={4}
                        className="container">
                        <Grid item md={4} xs={12}>
                            <aside className="productcategorySidebar">
                                <CategoryList />
                                <RelatedCategory />
                            </aside>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Portfolio />
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Fragment>
        )
    }
}

export default CategoryPage;
