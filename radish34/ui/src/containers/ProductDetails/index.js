import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import PurchaseLicence from 'components/PurchaseLicence/Loadable'
import ProductInfo from 'components/ProductInfo/Loadable'
import ItemDetails from 'components/ItemDetails/Loadable'
import CommentItem from 'components/CommentItem/Loadable'
import PostComment from 'components/PostComment/Loadable'
import Support from 'components/Support/Loadable'
import Faq from 'components/Faq/Loadable'
import Review from 'components/Review/Loadable'

import Footer from 'components/Footer/Loadable'

import 'components/Followers/style.scss'
import './style.scss'

// images 
import logo from 'images/logo.png'
// images 
import image1 from 'images/products/img1.jpg'
import image2 from 'images/products/img2.jpg'
import image3 from 'images/products/img3.jpg'
import image4 from 'images/products/img4.jpg'
import image5 from 'images/products/img5.jpg'
import image6 from 'images/products/img6.jpg'
import author from 'images/user-profile-img.jpg'
const products = [
    {
        name: 'Canlye - Multipurpose Wordpress Theme',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 1
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 5,
        image: image2,
        author: 'Wpoceans',
        price: '$39.00',
        review: '105',
        id: 2
    },
    {
        name: 'Meditouch - Medical Landing Page',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wpoceans',
        price: '$29.00',
        review: '50',
        id: 3
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 4
    },
    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 5
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 5,
        image: image2,
        author: 'Wpoceans',
        price: '$39.00',
        review: '105',
        id: 10
    },
    {
        name: 'Meditouch - Medical Landing Page',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wpoceans',
        price: '$29.00',
        review: '50',
        id: 11
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 12
    },
    {
        name: 'Lavelo - Wedding Wordpress Theme',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 6
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 7
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 8
    },
    {
        name: 'Canlye - Multipurpose Wordpress Theme',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 9
    },
    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 13
    },
    {
        name: 'Lavelo - Wedding Wordpress Theme',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 15
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 14
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 16
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 21
    },
    {
        name: 'Lavelo - Wedding Wordpress Theme',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 22
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 23
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 24
    },
    {
        name: 'Canlye - Multipurpose Wordpress Theme',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 17
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 5,
        image: image2,
        author: 'Wpoceans',
        price: '$39.00',
        review: '105',
        id: 18
    },
    {
        name: 'Meditouch - Medical Landing Page',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wpoceans',
        price: '$29.00',
        review: '50',
        id: 19
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 20
    },
]





class ProductDetails extends Component {
    state = {
        product: {},
        products: products,
        value: 0
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }
    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        let product = this.state.products.filter(b => b.id === id);
        if (product.length >= 0) {
            this.setState({
                product: product[0]
            })
        }
    }
    render() {
        const menus = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: this.state.product.name,
            },
        ]

        return (
            <Fragment>
                <Helmet>
                    <title>{this.state.product.name}</title>
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <Breadcumb
                    title={this.state.product.name}
                    menus={menus}
                />
                <Grid className="productDetailsArea ptb-104">
                    <Grid container spacing={4} className="container">
                        <Grid item md={8} xs={12}>
                            <Grid className="productDetailsWrap">
                                <Grid className="productDetailsImg">
                                    <img src={this.state.product.image} alt="" />
                                </Grid>
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    classes={{
                                        root: 'tabWrap',
                                        flexContainer: 'tabContainer',
                                        indicator: 'tabIndicator'
                                    }}
                                >
                                    <Tab label="Item Details" />
                                    <Tab label="Comments" />
                                    <Tab label="Review" />
                                    <Tab label="Support" />
                                    <Tab label="FAQ" />
                                </Tabs>
                                {this.state.value === 0 && <ItemDetails />}
                                {this.state.value === 1 && <Fragment>
                                    <CommentItem />
                                    <PostComment />
                                </Fragment>}
                                {this.state.value === 2 && <Review />}
                                {this.state.value === 3 && <Support />}
                                {this.state.value === 4 && <Faq />}
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <aside className="productDetailsSidebar">
                                <PurchaseLicence />
                                <Grid className="widgetWrap widgetWrapContent">
                                    <p>
                                        <span className="name">
                                            <i className="fi flaticon-supermarket"></i>
                                            Total Sale
                                        </span>
                                        <span className="value">350</span>
                                    </p>
                                </Grid>
                                <Grid className="widgetWrap widgetWrapContent">
                                    <p>
                                        <span className="name">
                                            <i className="fi flaticon-chat"></i>
                                            Comments
                                        </span>
                                        <span className="value">27</span>
                                    </p>
                                </Grid>
                                <Grid className="widgetWrap widgetWrapContent">
                                    <p>
                                        <span className="name">
                                            <i className="fi flaticon-favorites"></i>
                                            Item Rating
                                        </span>
                                        <span className="ratingItem">
                                            <Rating
                                                className="ratingIcon"
                                                emptySymbol="fa fa-star-o"
                                                fullSymbol="fa fa-star"
                                                initialRating={5}
                                                readonly
                                            />
                                            <span className="review">(08)</span>
                                        </span>

                                    </p>
                                </Grid>
                                <ProductInfo />
                                <Grid className="widgetWrap authorWrapper">
                                    <Grid className="followersItem">
                                        <Grid className="followersImg">
                                            <img src={author} alt="" />
                                        </Grid>
                                        <Grid className="followersContent">
                                            <h4><Link to="/author">wpoceans</Link></h4>
                                            <p>Signed Up: 25 June 2017</p>
                                        </Grid>
                                    </Grid>
                                    <ul>
                                        <li><Button className="btn" component={Link} to='/author'>View Profile</Button></li>
                                        <li><Button className="btn btnNormal">Send Message</Button></li>
                                    </ul>
                                </Grid>
                            </aside>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Fragment>
        )
    }
}

export default ProductDetails;
