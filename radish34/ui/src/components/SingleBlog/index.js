import React from 'react';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

const SingleBlog = ({ image, badge, id, title, author, avatar }) => {

    return (
        <Grid className="blogWrap">
            <Grid className="blogImg">
                <Link to={`/blog-details/${id}`}>
                    <img src={image} alt="" />
                </Link>
                <span className={
                    `badge ${
                    badge === 'trending' && 'trending' ||
                    badge === 'featured' && 'featured' ||
                    badge === 'new' && 'new'
                    }`

                }>{badge}</span>
            </Grid>
            <Grid className="blogContent">
                <h3><Link to={`/blog-details/${id}`}>{title}</Link></h3>
                <p><img src={avatar} alt="" /> <Link to='/author'>{author}</Link></p>
            </Grid>
        </Grid>
    );
}

export default SingleBlog;
