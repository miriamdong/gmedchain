import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import './style.scss'

const featureds = [
    {
        title: 'Safe Procurement',
        text: 'With improved transparency, buyers can seek ethical sources that minimize their environmental footprint.',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        icon: 'flaticon-ui',
        id: 1
    },
    {
        title: 'Smart Logistic',
        text: 'Smart Contract creates trust in the digitized document workflow and improves the efficiency to save on labor costs and working capital. ',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        icon: 'flaticon-support',
        id: 2
    },
    {
        title: 'Advanced Analytics',
        text: 'Connected Supply Chain powered by AI, big data and machine learning has real-time visibility to strategize and mitigate risks.',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        icon: 'flaticon-rocket',
        id: 3
    },
]

const Featured = () => {
    return (
        <Grid className="featuredArea ptb-104">
            <Grid container spacing={4} className="container">
                {featureds.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Grid className="featuredItem">
                            <i style={{ background: item.color }} className={`fi ${item.icon}`}></i>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default Featured
