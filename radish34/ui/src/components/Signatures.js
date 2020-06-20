import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SignatureItem = props => {
  const { status, details, role } = props;
  return (
    <Grid item style={{ padding: '1rem' }} xs={4}>
      <Typography>
        {role}: {status}
      </Typography>
      {status === 'Approved' ? (
        <Typography>Nombre de la Organización: {details.name}</Typography>
      ) : (
        <Typography>En espera de la firma</Typography>
      )}
    </Grid>
  );
};

function handleModelChange(changes) {
  // alert('GoJS model changed!');
}

const Signatures = props => {
  const { buyer, supplier, buyerStatus, supplierStatus } = props;
  return (
    <Grid className="productDetailsArea ptb-104">
      <Grid container direction="row">
        <SignatureItem role="Buyer" status={buyerStatus ? 'Approved' : 'Pending'} details={buyer} />
        <SignatureItem
          role="Supplier"
          status={supplierStatus ? 'Approved' : 'Pending'}
          details={supplier}
        />
      </Grid>
    </Grid>
  );
};

Signatures.propTypes = {
  buyer: PropTypes.shape({}).isRequired,
  supplier: PropTypes.shape({}).isRequired,
  buyerStatus: PropTypes.bool.isRequired,
  supplierStatus: PropTypes.bool.isRequired,
};

SignatureItem.propTypes = {
  role: PropTypes.oneOf(['Buyer', 'Supplier']).isRequired,
  status: PropTypes.oneOf(['Approved', 'Pending']).isRequired,
  details: PropTypes.shape({}).isRequired,
};

export default Signatures;
