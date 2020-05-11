import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'
// images 
import errorImg from 'images/404.png'


const ErrorPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>404 Page</title>
            </Helmet>
            <Grid className="errorArea ptb-104">
                <Grid
                    alignItems="center"
                    className="container"
                    spacing={4}
                    container>
                    <Grid item xs={12}>
                        <div className="errorWrap">
                            <img src={errorImg} alt="" className="errorimg" />
                            <h2>Oops! Page Not Found!</h2>
                            <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                            <Button className="btn" component={Link} to="/">Back to home</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

ErrorPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(ErrorPage);
