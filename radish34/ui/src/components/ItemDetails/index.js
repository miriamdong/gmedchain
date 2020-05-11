import React from 'react';
import { Grid } from '@material-ui/core';
import './style.scss'

// images 
import preview from '../../images/preview.jpg'

const ItemDetails = () => {
    return (
        <Grid className="itemDetails">
            <img src={preview} alt="" className="previewImg" />
            <p>Marketify is a wonderful WordPress Template. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will,</p>
            <p>which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
            <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
            <h3>Files Included</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>JavaScript</li>
            </ul>
            <h3>Sources and Credits</h3>
            <ul>
                <li>Bootstrap v4.0.0</li>
                <li>jQuery v3.3.1</li>
                <li>Animate CSS</li>
                <li>FontAwesome</li>
                <li>isotop</li>
                <li>Countdown</li>
                <li>Owl carosel</li>
                <li>Smoothscroll</li>
            </ul>
            <h3>Fonts And Icon</h3>
            <ul>
                <li>Now - <a href="#">https://befonts.com/now-typeface.html</a></li>
                <li>Open Sans - <a href="#">https://fonts.google.com/specimen/Open+Sans</a></li>
                <li>Flaticon - <a href="#">https://www.flaticon.com/</a></li>
            </ul>
        </Grid>
    );
}

export default ItemDetails;
