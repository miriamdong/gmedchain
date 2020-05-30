import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { ErrorMessage } from 'formik';

const useStyles = makeStyles(() => ({
    formControl: {
        width: '100%',
        marginBottom: '1rem',
    },
    errorMessage: {
        color: 'red',
        marginTop: '16px'
      },
}));

const CurrencySelect = ({formik}) => {
  const classes = useStyles();

  return <FormControl className={classes.formControl}> 
        <InputLabel htmlFor="currency">Currency</InputLabel>
        <Select 
            defaultValue=""
            id="grouped-select"
            label="currency"
            onChange={formik.handleChange}
            value={formik.values.currency}
            name="currency"
        >
            <MenuItem value={"eur"}>EUR</MenuItem>
            <MenuItem value={"gbp"}>GBP</MenuItem>
            <MenuItem value={"usd"}>USD</MenuItem>
        </Select>

        <ErrorMessage
            name="currency"
            render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
        />
    </FormControl>;
};

CurrencySelect.propTypes = {
    formik: PropTypes.shape({}).isRequired,
  };

export default CurrencySelect;
