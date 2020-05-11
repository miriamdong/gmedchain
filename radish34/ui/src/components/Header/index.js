import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Menu, Button, TextField, InputAdornment, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel } from '@material-ui/core'
import ScrollArea from 'react-scrollbar';

import { Link, NavLink } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';
import { changeLocale } from '../../containers/LanguageProvider/actions';
import makeSelectHeader from './selectors';
import './style.scss'

// images 
import cart1 from '../../images/cart/img1.jpg'
import cart2 from '../../images/cart/img2.jpg'


const carts = [
    {
        image: cart1,
        name: 'Brown Leather Boots',
        value: '145.10',
        id: 1
    },
    {
        image: cart2,
        name: 'Headphones Pryma',
        value: '15.10',
        id: 2
    },
    {
        image: cart1,
        name: 'Brown Leather Boots',
        value: '145.10',
        id: 3
    },
    {
        image: cart2,
        name: 'Headphones Pryma',
        value: '15.10',
        id: 4
    },
    {
        image: cart1,
        name: 'Brown Leather Boots',
        value: '145.10',
        id: 5
    },
    {
        image: cart2,
        name: 'Headphones Pryma',
        value: '15.10',
        id: 6
    },
]

const Header = (props) => {


    const menus = [
        {
            name: 'Services',
            id: 1,
            submenu: [
                {
                    name: 'Home Style 1',
                    link: '/'
                },
                {
                    name: 'Home Style 2',
                    link: '/home-two'
                },
                {
                    name: 'Home Style 3',
                    link: '/home-three'
                },
            ],
        },
        {
            name: 'About us',
            link: '/about',
            id: 7
        },
        /*{
            name: `2`,
            id: 4,
            submenu: [
                {
                    name: 'Author',
                    link: '/author'
                },
                {
                    name: '404',
                    link: '/404'
                }
            ],
        },
        {
            name: 'products',
            id: 57,
            submenu: [
                {
                    name: 'Products',
                    link: '/products'
                },
                {
                    name: 'product details',
                    link: '/product-details/1'
                }
            ],
        },
        {
            name: 'Blogs',
            id: 5,
            submenu: [
                {
                    name: `2`,
                    link: '/blog'
                },
                {
                    name: `2`,
                    link: '/blog-details/1'
                },
            ],
        },
        {
            name: `2`,
            link: '/contact',
            id: 6
        }*/
    ]
    const [openCart, setCart] = useState(null);
    const [openSearch, setSearch] = useState(null);
    const [expanded, setExpanded] = useState('0');
    const [menu, setMenu] = useState(false);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClickCart = event => {
        setCart(event.currentTarget);
    };

    const handleCloseCart = () => {
        setCart(null);
    };

    const handleClickSearch = event => {
        setSearch(event.currentTarget);
    };

    const handleCloseSearch = () => {
        setSearch(null);
    };

    const responsiveMenuHandler = () => {
        setMenu(!menu)
    }


    return (
        <header className={props.className ? `${props.className} headerArea` : 'headerArea'}>
            <Grid
                container
                alignItems="center"
                spacing={4}
                className="container">

                <Grid item lg={3} sm={6} xs={12}>
                    <Link to="/" className="logoWrapper">
                        <img src={props.logo} alt="" />
                    </Link>
                </Grid>
                <Grid item className="d-none" lg={6}>
                    <ul className="mainmenu">
                        {menus.map(menu => (
                            <li key={menu.id}>
                                {menu.link ? <NavLink onClick={window.scrollTo(0, 0)} exact to={menu.link}>{menu.name}</NavLink> : <span>{menu.name} <i className="fa fa-angle-down"></i></span>}
                                {menu.submenu ? <ul>
                                    {menu.submenu.map((sub, i) => (
                                        <li key={i}><NavLink onClick={window.scrollTo(0, 0)} exact to={sub.link}>{sub.name}</NavLink></li>
                                    ))}
                                </ul> : ''}
                            </li>
                        ))}
                    </ul>
                </Grid>

                <Grid item lg={3} sm={5} xs={10}>
                    <ul className="headerRight">
                        <li onClick={handleClickCart}>
                            <i className="fi flaticon-bag"></i>
                            <span className="value">{carts.length < 10 ? `0${carts.length}` : carts.length}</span>
                        </li>
                        <li onClick={handleClickSearch} component={Link} to="/Dashboard"><i className="fi flaticon-magnifying-glass"></i></li>
                        <li><Button className="btn" component={Link} to="/product/gallery">My Account</Button></li>
                    </ul>
                    <Menu
                        anchorEl={openSearch}
                        keepMounted
                        open={Boolean(openSearch)}
                        onClose={handleCloseSearch}
                        elevation={1}
                        getContentAnchorEl={null}
                        className="searchWrap"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        classes={{
                            paper: 'searchPaper',
                            list: 'searchLists',
                        }}
                    >
                        <li>
                            <form>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <Button><i className="fi flaticon-magnifying-glass"></i></Button>
                                        </InputAdornment>,
                                    }}
                                />
                            </form>
                        </li>
                    </Menu>
                    <Menu
                        anchorEl={openCart}
                        keepMounted
                        open={Boolean(openCart)}
                        onClose={handleCloseCart}
                        elevation={0}
                        getContentAnchorEl={null}
                        className="cartWrapper"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        classes={{
                            paper: 'cartPaper',
                            list: 'cartLists',
                        }}
                    >
                        <li className="cartList">
                            <ScrollArea
                                speed={1}
                                className="scrollbarArea"
                                contentClassName="scrollbarContent"
                                horizontal={false}
                            >
                                <ul className="cartItems">
                                    {carts.map((item, i) => (
                                        <li key={i}>
                                            <Button
                                                className="cartItem"
                                                component={Link}
                                                to="/product-details">
                                                <span className="cartImg">
                                                    <img src={item.image} alt="" />
                                                </span>
                                                <span className="cartContent">
                                                    <h4>{item.name}</h4>
                                                    <span>{`$${item.value}`}</span>
                                                </span>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                            <h3>$150.10</h3>
                            <Button className="btn btnFull" component={Link} to="/cart"> View cart </Button>
                        </li>
                    </Menu>
                </Grid>
                <Grid item md={1} sm={1} xs={2} className="responsiveMenuTrigger">
                    <ul onClick={responsiveMenuHandler} className={menu ? 'responsiveMenuTriggerItem active' : 'responsiveMenuTriggerItem'}>
                        <li className="first"></li>
                        <li className="second"></li>
                        <li className="third"></li>
                    </ul>
                </Grid>
            </Grid>
            <Grid className={menu ? 'responsiveMenuWrap active' : 'responsiveMenuWrap'}>
                {menus.map((menu, i) => (
                    <Fragment key={i}>
                        {menu.submenu ? <ExpansionPanel
                            classes={{
                                root: 'responsiveColups',
                            }}
                            square
                            expanded={expanded === menu.id}
                            onChange={handleChange(menu.id)}>
                            <ExpansionPanelSummary className="responsiveColupdHead">{menu.name}</ExpansionPanelSummary>
                            <ExpansionPanelDetails className="responsiveColupdDetails">
                                <ul className="responsiveSubmenuItems">
                                    {menu.submenu.map(((sub, i) => (
                                        <li key={i}><NavLink exact activeClassName="active" to={sub.link}>{sub.name}</NavLink></li>
                                    )))}
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> : <NavLink exact activeClassName="active" to={menu.link}>{menu.name}</NavLink>}
                    </Fragment>
                ))}
            </Grid>
        </header>
    );
}

const mapStateToProps = createStructuredSelector({
    headerComponent: makeSelectHeader(),
    locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
    return {
        changeLocale: locale => dispatch(changeLocale(locale)),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default Header;
