import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from '../SectionTitle/Loadable'

import './style.scss'


const pricings = [
    {
        name: 'Starter',
        icon: 'flaticon-plane',
        price: 69,
        color: '#8268f7',
        items: ['1 Year Membership', 'Post Products - Unlimited', 'Receive & Respond to Inquiries', 'Verification Support', 'Unlimited Tech Support','Records Management','Demos Included','Industry Insights'],
        btn: 'Choose Single',
        bg: 'linear-gradient(to top, #6168f3, #c968ff)',
        className: 'single',
        id: 1,
    },
    {
        name: 'Premium',
        icon: 'flaticon-airplane',
        price: 99,
        color: '#00c5d7',
        items: ['Include Everything in Starter, and', 'Data & Reporting', 'Forum Support', 'Transact on platform', 'Unlimited Tracking Support','Personalized Customer Service','Performance Consultation','Monetize Your Data'],
        btn: 'Choose Multiple',
        className: 'multiple',
        bg: 'linear-gradient(to top, #00a7d5, #00ded8)',
        id: 2,
    },
    {
        name: 'Enterprise',
        icon: 'flaticon-rocket-1',
        price: 299,
        color: '#fbb17a',
        items: ['Include Everything in Premium, and', 'Keyword Ad Spend', 'Beta features access', 'Sub Accounts', 'Payment Solution Support','Minisite creation','B2B Insider Access','IoT Integration'],
        btn: 'Choose Extended',
        className: 'extended',
        bg: 'linear-gradient(to top, #f6d365, #fda085)',
        id: 1,
    },
]

const Pricing = () => {
    return (
        <Grid className="pricingArea  bgGray">
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <SectionTitle
                      
                        subtitle="Choose a GMedChain Seller plan to launch your new business growth"
                    />
                </Grid>
                {pricings.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Grid className={`pricingWrap ${item.className}`}>
                            <i className={`fi ${item.icon}`}></i>
                            <h3>{item.name}</h3>
                            <h2>
                                <span className="symble">$</span>
                                {item.price}
                                <span className="date" style={{ color: item.color }}>Per Month</span>
                            </h2>
                            <ul>
                                {item.items.map((list, i) => (
                                    <li key={i}><span style={{ background: item.color }}></span> {list}</li>
                                ))}
                            </ul>
                            <Button style={{ background: item.bg }} className="btn">{item.btn}</Button>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    )

}
export default Pricing
