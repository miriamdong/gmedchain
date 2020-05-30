import React, { useContext } from 'react';
import { useFormik, FormikProvider, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Clear from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import CurrencySelect from '../components/CurrencySelect';
import ProductCategorySelect from '../components/ProductCategorySelect';
import AddSpecField from '../components/AddSpecField';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { AddProductContext } from '../contexts/add-product-context';
import NoticeLayout from '../components/NoticeLayout';

const useStyles = makeStyles(() => ({
  field: {
    width: '100%',
    marginBottom: '1rem',
  },
  subtitle: {
    color: 'grey',
    fontSize: '60%'
  },
  titleBlock: {
    marginBottom: '2rem'
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
    width: '95%',
    height: '100%',
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

const AddProduct = () => {
  const classes = useStyles();
  const { postProduct } = useContext(AddProductContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      sku: '',
      name: '',
      desc: '',
      category: '',
      availableQt: 0,
      price: 0.0,
      currency: '',
      productAdditionDate: moment(Date.now()),
      specs: [],
    },
    onSubmit: async values => {
      const { productAdditionDate } = values;
      await postProduct({
        variables: {
          input: {
            ...values,
            availableQt: parseInt(values.availableQt),
            price: parseFloat(values.price),
            productAdditionDate: moment(productAdditionDate).unix(),
          },
        },
      });
      history.push('/');
    },
    validationSchema: Yup.object().shape({
      desc: Yup.string().required('Product description required'),
      name: Yup.string().required('Product name required'),
      category: Yup.string().required('Category required.'),
      sku: Yup.string().required('SKU required.'),
      availableQt: Yup.number().min(1, 'Quantity required.'),
      price: Yup.number().min(0.01, 'Price required.'),
      currency: Yup.string().required('Currency required.'),
    }),
  });

  const onClear = () => history.push('/');

  return (
    <NoticeLayout>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.titleBlock}>
          <h1>Add a new product
            <Typography className={classes.subtitle}>
              Fill the form below to add your product to the marketplace.
            </Typography>
          </h1>
        </div>

        <h2>General information</h2>
        <Clear className={classes.clearIcon} onClick={() => onClear()} />
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="SKU"
              onChange={formik.handleChange}
              value={formik.values.sku}
              name="sku"
              className={classes.field}
            />
            <ErrorMessage
              name="sku"
              render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
            />
            
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Product name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                  className={classes.field}
                />
                <ErrorMessage
                  name="name"
                  render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
                />
              </Grid>
              <Grid item xs={6}>
                <ProductCategorySelect formik={formik}></ProductCategorySelect>
              </Grid>
            </Grid>

            <TextField
              label="Description"
              onChange={formik.handleChange}
              value={formik.values.desc}
              name="desc"
              className={classes.field}
              multiline
              rows={4}
            />
            <ErrorMessage
              name="desc"
              render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
            />

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Available quantity"
                  onChange={formik.handleChange}
                  value={formik.values.availableQt}
                  name="availableQt"
                  className={classes.field}
                />
                <ErrorMessage
                  name="availableQt"
                  render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Price per unit"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  name="price"
                  className={classes.field}
                />
                <ErrorMessage
                  name="price"
                  render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
                />
              </Grid>
              <Grid item xs={3}>
                <CurrencySelect formik={formik}></CurrencySelect>
              </Grid>
            </Grid>

            <h2>Product specifications</h2>
            <AddSpecField formik={formik}></AddSpecField>

            <Button className={classes.submitButton} type="submit">
              Create
            </Button>
          </form>
        </FormikProvider>
      </Paper>
    </NoticeLayout>
  );
};

export default AddProduct;
