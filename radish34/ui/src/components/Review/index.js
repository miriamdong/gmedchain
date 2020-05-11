import React, { Component, Fragment } from 'react';
import Rating from 'react-rating'
import { Grid } from '@material-ui/core'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import image1 from '../../images/review/img1.png'
import image2 from '../../images/review/img2.png'
import image3 from '../../images/review/img3.png'
import image4 from '../../images/review/img4.png'


const reviews = [
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'DigiTheme',
        time: '12 Hours Ago',
        image: image2,
        rating: 3.5,
        rating_type: 'For Code Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemeSidex',
        time: '1 Days Ago',
        image: image3,
        rating: 4.5,
        rating_type: 'For Customer Support',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ProFinder',
        time: '2 Days Ago',
        image: image4,
        rating: 4,
        rating_type: 'For Others',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
]

class Review extends Component {
    state = {
        pageOfItems: [],
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <Fragment>
                <ul className="reviewItems">
                    {this.state.pageOfItems.map((item, i) => (
                        <li key={i} className="reviewItem">
                            <Grid className="reviewImg">
                                <img src={item.image} alt="" />
                            </Grid>
                            <Grid className="reviewContent">
                                <Grid className="reviewContentTop">
                                    <Grid className="ContentLeft">
                                        <h4><Link to='/author'>{item.name}</Link></h4>
                                        <span>{item.time}</span>
                                    </Grid>
                                    <Grid className="contentRight">
                                        <Rating
                                            className="ratingIcon"
                                            emptySymbol="fa fa-star-o"
                                            fullSymbol="fa fa-star"
                                            initialRating={item.rating}
                                            readonly
                                        />
                                        <span className="review">({item.rating_type})</span>
                                    </Grid>
                                </Grid>
                                <p>{item.details}</p>
                            </Grid>
                        </li>
                    ))}

                </ul>
                <Pagination
                    rowShow={10}
                    items={reviews}
                    onChangePage={this.onChangePage}
                />
            </Fragment>
        )
    }
}

export default Review;
