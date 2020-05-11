import React, { useContext, Fragment } from 'react';
import { useFormik, Field, FormikProvider, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Clear from '@material-ui/icons/Clear';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import DatePickerField from '../components/DatePickerField';
import AddSKUField from '../components/AddSKUField';
import AddSuppliersField from '../components/AddSuppliersField';
import { RFPContext } from '../contexts/rfp-context';
import { PartnerContext } from '../contexts/partner-context';
import NoticeLayout from '../components/NoticeLayout';
import ItemDetails from '../components/ItemDetails';
import Header from '../components/Header/Loadable';
import Breadcumb from '../components/Breadcumb/Loadable';
import logo from '../images/logo.png';
import Hero from '../components/HomeMain/Hero/Loadable';
import { Helmet } from 'react-helmet';
import PurchaseLicence from '../components/PurchaseLicence';
import ProductDetails from '../components/ProductDetails'
import Footer from '../components/Footer'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  field: {
    width: '100%',
    marginBottom: '1rem',
  },
  errorMessage: {
    color: 'red',
  },
  submitButton: {
    background: '#007BFF',
    color: '#FFF',
  },
  paper: {
    position: 'relative',
    padding: '2rem',
    margin: '0 auto',
    width: '50%',
    height: '80%',
    marginTop: '2rem',
  },
  clearIcon: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const CreateRFP = (e) => {
  
  const classes = useStyles();
  const { postRFP } = useContext(RFPContext);
  const { organizations } = useContext(PartnerContext);
  const currentUser = localStorage.getItem('username') || 'Org 1';
  const suppliers = organizations.filter(org => {
    const names = {
      Supplier1: 'Supplier 1',
      Supplier2: 'Supplier 2',
      Org1: 'Org1',
    };
    return org.name !== names[currentUser]
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      description: 'Masks N95',
      proposalDeadline: moment(Date.now()),
      sku: 'SK 233322',
      skuDescription: 'Need it now!',
      recipients: [],
    },
    
    onSubmit: async values => {
      const { proposalDeadline } = values;
      await postRFP({
        variables: {
          input: {
            ...values,
            proposalDeadline: moment(proposalDeadline).unix(),
          },
        },
      });
      history.push('/notices/outbox');
    },
    validationSchema: Yup.object().shape({
      description: Yup.string().required('RFP Description required'),
      sku: Yup.string().required('Input SKU number'),
      recipients: Yup.array()
        .of(Yup.string().required('Cannot submit empty supplier field'))
        .min(1, 'Must add at least 1 supplier'),
    }),
  });
  
  const onClear = () => history.push('/notices/rfp');
  const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Masks N95',
    },
]

  return (
  <Fragment>  
      <Helmet>
          <title>GmedChain</title>
      </Helmet>
      <Header
          className="headerAreaStyleTwo"
          logo={logo}
      />
      <Breadcumb
          title={'Disposable N95 Masks'}
          menus={menus}
      />
      <Grid>
      <Paper className={classes.paper} elevation={3}>
        <h1>Create a new RFP</h1>
        <Clear className={classes.clearIcon} onClick={() => onClear()} />
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} >
            <TextField
              label="RFP Description"
              onChange={formik.handleChange}
              value={formik.values.description}
              name="description"
              className={classes.field} 
            />
            <ErrorMessage
              name="description"
              render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
            />
            <Field name="proposalDeadline" label="Proposal Deadline" component={DatePickerField} />
            <AddSKUField formik={formik} />
            <AddSuppliersField formik={formik} suppliers={suppliers}  />
            <Button className='btn' type="submit">
              Send RFP
            </Button>
          </form>
        </FormikProvider>
       </Paper>
       <br></br>
       </Grid>
       <Footer/>
    </Fragment>
  );
};

export default CreateRFP;
