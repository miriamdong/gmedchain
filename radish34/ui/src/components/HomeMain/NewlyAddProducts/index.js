import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import SectionTitle from '../../SectionTitle/Loadable'
import './style.scss'


const products = [
    {
        name: 'Barristar',
        icon: 'flaticon-law-1',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        id: 1
    },
    {
        name: 'ConsultAid',
        icon: 'flaticon-weather',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5) ',
        id: 2
    },
    {
        name: 'Jurista',
        icon: 'flaticon-heart-1',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        id: 3
    },
    {
        name: 'Shifter',
        icon: 'flaticon-muscles',
        color: 'linear-gradient(to bottom, #fb9ed9, #fc7ab5)',
        id: 4
    },
    {
        name: 'Lavelo',
        icon: 'flaticon-flower',
        color: 'linear-gradient(to bottom, #f6d365, #fda085)',
        id: 5
    },
    {
        name: 'Oule',
        icon: 'flaticon-celtic',
        color: 'linear-gradient(to bottom, #7387fd, #2e5add)',
        id: 6
    },
    {
        name: 'Motonic',
        icon: 'flaticon-send',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        id: 7
    },
    {
        name: 'Butterfly',
        icon: 'flaticon-insect',
        color: 'linear-gradient(to bottom, #f6d365, #fda085)',
        id: 8
    },
    {
        name: 'Testoran',
        icon: 'flaticon-chef-hat-outline-symbol',
        color: 'linear-gradient(to bottom, #fb9ed9, #fc7ab5)',
        id: 9
    },
    {
        name: 'Housee',
        icon: 'flaticon-house',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        id: 10
    },
    {
        name: 'DreamTouch',
        icon: 'flaticon-light-bulb',
        color: 'linear-gradient(to bottom, #7387fd, #2e5add)',
        id: 11
    },
    {
        name: 'Greatby',
        icon: 'flaticon-diamond',
        color: 'linear-gradient( to bottom, #ffad6f, #ff7d90)',
        id: 12
    },
    {
        name: 'Barristar',
        icon: 'flaticon-law-1',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        id: 13
    },
    {
        name: 'ConsultAid',
        icon: 'flaticon-weather',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5) ',
        id: 14
    },
    {
        name: 'Jurista',
        icon: 'flaticon-heart-1',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        id: 15
    },
    {
        name: 'Shifter',
        icon: 'flaticon-muscles',
        color: 'linear-gradient(to bottom, #fb9ed9, #fc7ab5)',
        id: 16
    },
    {
        name: 'Lavelo',
        icon: 'flaticon-flower',
        color: 'linear-gradient(to bottom, #f6d365, #fda085)',
        id: 17
    },
    {
        name: 'Oule',
        icon: 'flaticon-celtic',
        color: 'linear-gradient(to bottom, #7387fd, #2e5add)',
        id: 18
    },
    {
        name: 'Motonic',
        icon: 'flaticon-send',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        id: 19
    },
    {
        name: 'Butterfly',
        icon: 'flaticon-insect',
        color: 'linear-gradient(to bottom, #f6d365, #fda085)',
        id: 20
    },
    {
        name: 'Testoran',
        icon: 'flaticon-chef-hat-outline-symbol',
        color: 'linear-gradient(to bottom, #fb9ed9, #fc7ab5)',
        id: 21
    },
    {
        name: 'Housee',
        icon: 'flaticon-house',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        id: 22
    },
    {
        name: 'DreamTouch',
        icon: 'flaticon-light-bulb',
        color: 'linear-gradient(to bottom, #7387fd, #2e5add)',
        id: 23
    },
    {
        name: 'Greatby',
        icon: 'flaticon-diamond',
        color: 'linear-gradient( to bottom, #ffad6f, #ff7d90)',
        id: 24
    },
]


const NewlyAddProducts = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        rows: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    };
    return (
        <Grid className="newlyAddProductsArea ptb-104 bgGray">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="Newly Added Products"
                        subtitle="Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!"
                    />
                </Grid>
                <Grid xs={12} item>
                    <Slider
                        className="newProductSlider"
                        >
                        {products.map((item, i) => (
                            <Grid
                                key={i}
                                className="newProductWrap">
                                <Button
                                    className="newProductItem"
                                    component={Link}
                                    to={`product-details/${item.id}`}

                                >
                                    <i style={{ background: item.color }} className={item.icon}></i>
                                    {item.name}
                                </Button>
                            </Grid>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NewlyAddProducts;
