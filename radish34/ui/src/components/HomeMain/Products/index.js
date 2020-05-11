import React, { useState, Fragment, setState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import SectionTitle from '../../SectionTitle/Loadable'
import { Grid, Tab, Tabs } from '@material-ui/core'
import SingleProduct from '../../SingleProduct/Loadable'
import './style.scss'
import SearchField from "react-search-field";
import TypeChecker from 'typeco';
// images 
import image1 from '../../../images/products/p1.jpg'
import image2 from '../../../images/products/p2.jpg'
import image3 from '../../../images/products/p3.jpg'
import image4 from '../../../images/products/p4.jpg'
import image5 from '../../../images/products/p5.jpg'
import image6 from '../../../images/products/p6.jpg'

const products = [
    {
        name: 'Disposable N95 Masks',
        badge: 'trending',
        rating: 4.2,
        image: image2,
        author: 'Wpoceans',
        price: '$3.00',
        review: '05',
        id: 1
    },
    {
        name: 'N543 Masks',
        badge: 'featured',
        rating: 5,
        image: image1,
        author: 'Wpoceans',
        price: '$9.00',
        review: '105',
        id: 2
    },
    {
        name: 'Chang Masks',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wong',
        price: '$1.00',
        review: '50',
        id: 3
    },
    {
        name: 'Disposable Surgical Masks',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'HSecure',
        price: '$12.00',
        review: '25',
        id: 4
    },
    {
        name: 'Yeah Masks',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Chang',
        price: '$0.50',
        review: '87',
        id: 5
    },
    {
        name: 'GRIN ANTI-POLLUTION MASK',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'P.e',
        price: '$16.00',
        review: '8774',
        id: 6
    },
]

const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return products;
    return products.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  };

const Products = () => {

    const [value, setValue] = useState(0);
    const [productList,setList] = useState(0);

    function onBasicExampleChange(value) {
 
        console.log(productList);
        setList(getMatchedList(value));
      }
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <Grid className="productArea ptb-104">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="Our Exclusive Products"
                        subtitle="Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!"
                    />
                </Grid>
                <Grid item xs={12}>
                    
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        classes={{
                            root: 'productTabs',
                            flexContainer: 'productTabContainer',
                            indicator: 'productTabIndicator'
                        }}
                    >
                        <Tab label="Masks" />
                        <Tab label="Thermometers" />
                        <Tab label="Ventilators" />
                        <Tab label="Flock Swabs" />
                        <Tab label="COVID-19 Testing Kits" />
                        <Tab label="Eye Protection" />
                        <Tab label="PPE" />
              
                    </Tabs>
                    <SearchField
                    placeholder="Search item"
                    onChange={onBasicExampleChange}
                     />
                </Grid>
                {value === 0 && productList.length >0 && <Fragment>
                    {productList.map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 0 && productList == [] && <Fragment>
                    {products.map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 1 && <Fragment>
                    {productList.slice(1, 6).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 2 && <Fragment>
                    {productList.slice(0, 4).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 3 && <Fragment>
                    {productList.slice(1, 5).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 4 && <Fragment>
                    {productList.map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 5 && <Fragment>
                    {productList.slice(0, 3).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 6 && <Fragment>
                    {productList.slice(3, 6).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 7 && <Fragment>
                    {productList.slice(0, 6).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}
            </Grid>
        </Grid>
    );
}
export default Products
