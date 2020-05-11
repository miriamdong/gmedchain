import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import cookie from 'js-cookie';

import {
  makeSelectUser,
  makeSelectMaintenanceModeStatus,
} from '../App/selectors';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import LanguageSwitcher from 'components/LanguageSwitcher/Loadable';
import { changeLocale } from 'containers/LanguageProvider/actions';

import './style.scss';
import { Grid } from '@material-ui/core';
import { getMaintenanceCode } from "utils/request";

export class PublicRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeLocale = (locale) => {
    cookie.set('ypto_lang', locale);
    this.props.changeLocale(locale);
  }

  render() {
    const Component = this.props.component;
    this.props = { ...this.props, component: null };

    let redirect = null;

    if (this.props.maintenanceMode === 1 && (getMaintenanceCode() === undefined || getMaintenanceCode() === '')) {
      if (this.props.location.pathname !== '/maintenance') {
        redirect = {
          pathname: '/maintenance',
          state: { from: this.props.location },
        };
      }
    } else if (this.props.user) {
      let path = '/';
      if (
        typeof this.props.location.state !== 'undefined' &&
        typeof this.props.location.state.from !== 'undefined' &&
        this.props.location.state.from.pathname !== '/log-out'
      ) {
        path = this.props.location.state.from.pathname;
      }
      redirect = {
        pathname: path,
        state: { from: this.props.location },
      };
    }

    return (
      <Grid className="PublicRoute">
        <LanguageSwitcher
          className="LanguageSwitcher"
          listCalssName="languageSwitcherWrap"
          onChange={this.onChangeLocale}
          locale={this.props.locale}
        />

        <Route
          {...this.props}
          render={props =>
            !redirect ? <Component {...props} /> : <Redirect to={redirect} />
          }
        />
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: locale => dispatch(changeLocale(locale)),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  locale: makeSelectLocale(),
  maintenanceMode: makeSelectMaintenanceModeStatus(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PublicRoute);
