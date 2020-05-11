import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: '100%',
    width: '100%',
    overflowX: 'hidden',
    background: '#F6F7FB',
  },
}));

const PageWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </main>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
