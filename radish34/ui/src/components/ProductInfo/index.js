import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'
import './style.scss'
const ProductInfo = () => {
    return (
        <Grid className="widgetWrap productInfoWrap">
            <h3><i className="fi flaticon-edit"></i> Product Information</h3>
            <ul>
                <li>
                    <span>Released :</span>
                    <span>16 Jan 2018</span>
                </li>
                <li>
                    <span>Last Update :</span>
                    <span>26 June 2019</span>
                </li>
                <li>
                    <span>Version :</span>
                    <span>1.2</span>
                </li>
                <li>
                    <span>Category :</span>
                    <span>Marketing &amp; Agency</span>
                </li>
                <li>
                    <span>Layout :</span>
                    <span>Responsive</span>
                </li>
                <li>
                    <span>Files Included :</span>
                    <span>Html, CSS, JavaScript</span>
                </li>
                <li>
                    <span>Browser :</span>
                    <span>IE10, IE11, Firefox, Safari, Opera, Chrome5</span>
                </li>
                <li>
                    <span>Software Version :</span>
                    <span>WordPress 5.1.x, WordPress 5.0.x,WordPress 4.9.x, WordPress 4.8.x, </span>
                </li>
                <li>
                    <span>Tags :</span>
                    <span>Marketing, Agency,Business, Creative,Minimal.</span>
                </li>
            </ul>
        </Grid>
    )
}

export default ProductInfo;
