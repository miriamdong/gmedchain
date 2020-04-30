import React, { useContext } from 'react';
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
import { AddProductContext } from '../contexts/add-product-context';
import NoticeLayout from '../components/NoticeLayout';

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
      name: '',
      desc: '',
      productAdditionDate: moment(Date.now()),
    },
    onSubmit: async values => {
      const { productAdditionDate } = values;
      await postProduct({
        variables: {
          input: {
            ...values,
            productAdditionDate: moment(productAdditionDate).unix(),
          },
        },
      });
      history.push('/');
    },
    validationSchema: Yup.object().shape({
      desc: Yup.string().required('Product description required'),
      name: Yup.string().required('Product name required'),
    }),
  });

  const onClear = () => history.push('/');

  return (
    <NoticeLayout>
      <Paper className={classes.paper} elevation={3}>
        <h1>Add a new product</h1>
        <Clear className={classes.clearIcon} onClick={() => onClear()} />
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
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
            <TextField
              label="Description"
              onChange={formik.handleChange}
              value={formik.values.desc}
              name="desc"
              className={classes.field}
              multiline
              rows={2}
              rowsMax={4}
            />
            <ErrorMessage
              name="desc"
              render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
            />
            <Button className={classes.submitButton} type="submit">
              Add
            </Button>
          </form>
        </FormikProvider>
      </Paper>
    </NoticeLayout>
  );
};

export default AddProduct;
