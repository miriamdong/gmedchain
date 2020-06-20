import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
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
    marginTop: '16px',
  },
}));

const ProductCategorySelect = ({ formik }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="category">Categoría</InputLabel>
      <Select
        defaultValue=""
        id="grouped-select"
        label="Categoría"
        onChange={formik.handleChange}
        value={formik.values.category}
        name="category"
      >
        <ListSubheader>PPE</ListSubheader>
        <MenuItem value="ppe/gloves">Guantes</MenuItem>
        <MenuItem value="ppe/mask">Máscaras</MenuItem>
        <MenuItem value="ppe/eyeprotection">Protección de los ojos</MenuItem>
        <MenuItem value="ppe/handsanitizer">Desinfectante de manos</MenuItem>
        <MenuItem value="ppe/gowns">Vestidos</MenuItem>
        <MenuItem value="ppe/coveralls">Overoles</MenuItem>
        <ListSubheader>Drogas</ListSubheader>
        <MenuItem value="drugs/drugs">Drogas</MenuItem>
      </Select>

      <ErrorMessage
        name="category"
        render={msg => <Typography className={classes.errorMessage}>{msg}</Typography>}
      />
    </FormControl>
  );
};

ProductCategorySelect.propTypes = {
  formik: PropTypes.shape({}).isRequired,
};

export default ProductCategorySelect;
