import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { ToastContainer, toast } from 'react-toastify'
import messages from './messages';
import Routes from 'containers/__Routes'
import GlobalStyle from '../../global-styles'
import 'react-modal-video/css/modal-video.min.css';
const App = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Edefy</title>
            </Helmet>
            <Routes />
            <ToastContainer position="top-center" />
            <GlobalStyle />
        </Fragment >
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(App);
