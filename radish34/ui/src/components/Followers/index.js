import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination'

import './style.scss'

// images 
import author from '../../images/user-profile-img.jpg'

const followers = [
    {
        name: 'wpoceans',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'themekhr',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'templatehunt',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 3
    },
    {
        name: 'softtheme',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 4
    },
    {
        name: 'wpoceans',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'themekhr',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'templatehunt',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 3
    },
    {
        name: 'softtheme',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 4
    },
    {
        name: 'wpoceans',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'themekhr',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'templatehunt',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 3
    },
    {
        name: 'softtheme',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 4
    },
    {
        name: 'wpoceans',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'themekhr',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'templatehunt',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 3
    },
    {
        name: 'softtheme',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 4
    },
    {
        name: 'wpoceans',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'themekhr',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'templatehunt',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 3
    },
    {
        name: 'softtheme',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 4
    },
    {
        name: 'wpoceans',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'themekhr',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'templatehunt',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 3
    },
    {
        name: 'softtheme',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 4
    },
    {
        name: 'wpoceans',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'themekhr',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 2
    },
    {
        name: 'templatehunt',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 3
    },
    {
        name: 'softtheme',
        image: author,
        date: 'Signed Up: 25 June 2017',
        id: 4
    },
]

class Followers extends Component {
    state = {
        pageOfItems: [],
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <Fragment>
                <ul className="followersItems">
                    {this.state.pageOfItems.map((item, i) => (
                        <li key={i} className="followersItem">
                            <Grid className="followersImg">
                                <img src={item.image} alt="" />
                            </Grid>
                            <Grid className="followersContent">
                                <h4><Link to="/author">{item.name}</Link></h4>
                                <p>{item.date}</p>
                            </Grid>
                        </li>
                    ))}

                </ul>
                <Pagination
                    rowShow={10}
                    items={followers}
                    className="justify-content-end"
                    onChangePage={this.onChangePage}
                />
            </Fragment >
        )
    }
}

export default Followers;
