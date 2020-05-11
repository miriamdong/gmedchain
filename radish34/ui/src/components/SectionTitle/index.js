import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import './style.scss'
const SectionTitle = ({ title, subtitle }) => {
    return (
        <Grid className="sectionTitle">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </Grid>
    );
}

export default SectionTitle;
