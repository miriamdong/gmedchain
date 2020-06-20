import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WelcomeImage from '../../images/logo.png';

const useStyles = makeStyles(() => ({
  root: {
    color: 'black',
    margin: '3rem',
    textAlign: 'center',
  },
  welcome: {
    color: 'black',
  },
  intro: {
    color: 'black',
    marginBottom: '1rem',
  },
  calltoAction: {
    color: 'black',
    marginBottom: '1rem',
  },
  buttonWrapper: {
    margin: '2rem',
  },
  button: {},
  welcomeImage: {},
}));

const NoNotices = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.welcome}>
        GMedChain
      </Typography>
      <Typography variant="h3" className={classes.intro}>
        Algunos textos aquí para motivar a los usuarios a comenzar a usar la aplicación.
      </Typography>
      <Typography variant="h5" className={classes.calltoAction}>
        Comencemos conectándonos con socios
      </Typography>
      <div className={classes.buttonWrapper}>
        <Button variant="contained" color="primary" className={classes.button}>
          Ver registro
        </Button>
      </div>
      <img className={classes.welcomeImage} src={WelcomeImage} alt="Bienvenido a Radish" />
    </div>
  );
};

export default NoNotices;
