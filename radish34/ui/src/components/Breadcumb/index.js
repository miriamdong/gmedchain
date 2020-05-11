import React from 'react';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'
const Breadcumb = ({ title, menus }) => {
    return (
        <Grid className="breadcumbArea">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <Grid className="breadcumbWrap">
                        <h2>{title}</h2>
                        <ul>
                            {menus.map((item, i) => (
                                <li key={i}>
                                    {
                                        item.link ?
                                            <Link to={item.link}>{item.name}</Link> :
                                            <span>{item.name}</span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Breadcumb;
