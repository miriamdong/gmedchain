import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import SectionTitle from '../SectionTitle/Loadable'
import Slider from "react-slick";
import './style.scss'

// images 
import test1 from '../../images/test/img1.jpg'
import test2 from '../../images/test/img2.jpg'
import test3 from '../../images/test/img3.jpg'

const testmonials = [
    {
        image: test1,
        name: 'Henry Jimac',
        desig: 'Head of  Mahrs',
        text: 'Edefy template dolor sit amet, consectetur adipiscing elit, beautiful sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        id: 1
    },
    {
        image: test2,
        name: 'Jenefer Marvel',
        desig: 'CEO of Barbarah',
        text: 'Edefy template dolor sit amet, consectetur adipiscing elit, beautiful sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        id: 2
    },
    {
        image: test3,
        name: 'Robert Blank',
        desig: 'Head of  Mahrs',
        text: 'Edefy template dolor sit amet, consectetur adipiscing elit, beautiful sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        id: 3
    },
    {
        image: test1,
        name: 'Henry Jimac',
        desig: 'Head of  Mahrs',
        text: 'Edefy template dolor sit amet, consectetur adipiscing elit, beautiful sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        id: 4
    },
]

const Testmonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <Grid className="testmonialArea ptb-104">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="What People Say"
                        subtitle="Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!"
                    />
                </Grid>
                <Grid xs={12} item>
                    <Slider
                        className="testSliders"
                        {...settings}>
                        {testmonials.map((item, i) => (
                            <Grid key={i} className="testWrap">
                                <Grid className="testItem">
                                    <span className="image">
                                        <img src={item.image} alt="" />
                                    </span>
                                    <h4>{item.name}</h4>
                                    <span>{item.desig}</span>
                                    <p>{item.text}</p>
                                </Grid>
                            </Grid>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Testmonial;
