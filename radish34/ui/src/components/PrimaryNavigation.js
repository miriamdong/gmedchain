import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Loading from './Loading';
import Link from './Link';
import UserSelection from './UserSelection';
import Balance from './Balance';
import { ServerSettingsContext } from '../contexts/server-settings-context';
import RadishLogoDark from '../images/logo.png';
import RadishLogoLight from '../images/logo.png';


const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0 1px 15px rgba(0,0,0,0.04), 0 1px 6px rgba(0,0,0,0.04)',
  },
  dark: {
    background: 'white',
  },
  light: {
    background: 'white',

    '& .logo-text': {
      color: 'black',
    },
    '& .org-address': {
      color: '#62737F',
      background: '#E3EBE8',
    },
  },
  logoWrapper: {
    display: 'flex',
  },
  logoImage: {
    marginRight: '.5rem',
    paddingRight: '.5rem',
    borderRight: '0px solid #C3CDD3',
  },
  logoText: {
    display: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  orgAddress: {
    marginLeft: theme.spacing(2),
    background: '#212B34',
    color: 'white',
  },
}));

export default function PrimaryNavigation() {
  const classes = useStyles();
  const { settings, loadingSettings } = useContext(ServerSettingsContext);
  if (loadingSettings || !settings) { return <Loading/> }
  const { organizationAddress, organizationName, organizationRole } = settings;
  const theme = organizationRole === 1 ? 'dark' : 'light';
  const logo = theme === 'dark' ? RadishLogoDark : RadishLogoLight;

  return (
    <div>
      <AppBar className={`${classes.appBar} ${classes[theme]}`}  position="fixed" elevation={0}>
        <Toolbar>
          <Link to="/">
            <div className={`logo-wrapper ${classes.logoWrapper}`}>
              <img className={`logo-image ${classes.logoImage}`} src={logo} alt="Radish Logo" />
              <Typography className={`logo-text ${classes.logoText}`} variant="h6" noWrap>
                {organizationName}
              </Typography>
              {/*<Chip
                className={`org-address ${classes.orgAddress}`}
                size="small"
                label={organizationAddress}
              />
              <Balance />*/}
            </div>
          </Link>
        </Toolbar>
        <UserSelection />
      </AppBar>
    </div>
  );
}
