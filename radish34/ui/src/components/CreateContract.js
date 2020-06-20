import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import SKUTable from './SKUTable';
import RateTable from './RateTable';
import '../docs/css/veriabls.scss';

import GlobalStyle from '../global-styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '15%',
  },
  borderLessButton: {
    color: 'blue',
  },
  button: {
    color: '#fff',
    background: 'blue',
  },
}));

const CreateContract = ({ rfp, proposal, open, handleClose, createContract, index }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <Grid>
          <GlobalStyle />
          <div style={{ margin: 'auto', position: 'relative' }} className={classes.paper}>
            <Typography variant="h2">{rfp.description}</Typography>
            <SKUTable sku={rfp.sku} description={rfp.skuDescription} />
            <RateTable
              rates={proposal.rates}
              erc20ContractAddress={proposal.erc20ContractAddress}
            />
            <Typography variant="body1">Añadir condiciones</Typography>
            <Button className={classes.borderLessButton}>+ Añadir condiciones</Button>
            <Typography variant="body1">
              Al seleccionar "Acepto", estoy aceptando los Términos y Condiciones aquí expuestos y
              ...
            </Typography>
            <br />
            <Button className="btn" onClick={() => createContract(index, proposal)}>
              Acepto
            </Button>
          </div>
        </Grid>
      </>
    </Modal>
  );
};

CreateContract.propTypes = {
  rfp: PropTypes.shape({}).isRequired,
  proposal: PropTypes.shape({}).isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  createContract: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

CreateContract.defaultProps = {
  open: false,
};

export default CreateContract;
