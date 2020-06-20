import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import clsx from 'classnames';
import { formatCurrency } from '../utils';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: '1px solid #DFE3E8',
    borderRadius: '10px',
    alignItems: 'center',
  },
  selected: {
    boxShadow: '0 3px 5px 2px #28D295',
  },
  invalidAmount: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  checkCircleOutline: {
    position: 'relative',
    top: 3,
    left: 3,
    color: '#28D295',
  },
});

const MSACard = ({ msa, price, onClick, selected, volume }) => {
  const classes = useStyles();
  const normalise = (value, min, max) => ((value - min) * 100) / (max - min);
  const latestCommitment = msa.commitments[msa.commitments.length - 1];
  const { accumulatedVolumeOrdered } = latestCommitment.variables;
  const valueForNormalise = () => {
    if (volume && !accumulatedVolumeOrdered) return volume;
    if (!volume && accumulatedVolumeOrdered) return accumulatedVolumeOrdered;
    if (volume && accumulatedVolumeOrdered) return volume + accumulatedVolumeOrdered;
    return 0;
  };
  const linearProgressValue = normalise(
    valueForNormalise(),
    msa.tierBounds[0],
    msa.tierBounds[msa.tierBounds.length - 1],
  );
  const invalidAmount = volume
    ? volume + accumulatedVolumeOrdered > msa.tierBounds[msa.tierBounds.length - 1]
    : false;

  return (
    <Card
      className={clsx(classes.root, {
        [classes.selected]: selected,
        [classes.invalidAmount]: invalidAmount || latestCommitment.index === null,
      })}
    >
      <CardActionArea onClick={onClick} disabled={latestCommitment.index === null}>
        <CardContent>
          {latestCommitment.index === null && (
            <Typography variant="body2" color="error">
              El último compromiso aún no está almacenado en el contrato de escudo, no se puede
              crear PO para este MSA
            </Typography>
          )}
          <Typography>{msa.supplierDetails.name}</Typography>
          <Typography>MSA para SKU: {msa.sku}</Typography>
          {latestCommitment.index === null ? (
            <Typography>Estado del contrato: pendiente</Typography>
          ) : (
            <Typography>
              Estado del contrato - Activo
              <CheckCircleOutline className={classes.checkCircleOutline} />
            </Typography>
          )}
          <LinearProgress variant="determinate" value={linearProgressValue} />
          <Typography>{`${valueForNormalise()}/${
            msa.tierBounds[msa.tierBounds.length - 1]
          }`}</Typography>
        </CardContent>
        <CardContent style={{ background: '#EAF4FF', maxWidth: 345, height: 100 }}>
          <Typography>COSTO ESTIMADO POR PEDIDO</Typography>
          <Typography variant="h2">{formatCurrency(price)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MSACard.propTypes = {
  msa: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  volume: PropTypes.number,
};

MSACard.defaultProps = {
  selected: false,
  volume: 0,
};

export default MSACard;
