import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import uniqid from 'uniqid';
import Link from './Link';
import CreateContract from './CreateContract';
import { formatCurrency } from '../utils';

const RFPSuppliersTable = ({ rfp, proposals, setOpen, open, createContract }) => {
  return (
    <>
      <Typography variant="h2">Proveedores</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Proveedor</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Volumen</TableCell>
            <TableCell>Precio por unidad</TableCell>
            <TableCell>Token de pago</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {proposals.map((proposal, index) => {
            return (
              <TableRow key={uniqid()}>
                <TableCell>{proposal.partner.name}</TableCell>
                <TableCell>
                  {/* {proposal.receiptDate ? `Sent: ${proposal.receiptDate}` : 'Pending'} */}
                  Enviado
                </TableCell>
                <TableCell>
                  {proposal.rates ? (
                    proposal.rates.map((rate, i) => (
                      <Typography key={uniqid()}>
                        {`${i === 0 ? rate.startRange + 1 : rate.startRange}-${rate.endRange}${
                          proposal.rates[i + 1] ? '' : '+'
                        }`}
                      </Typography>
                    ))
                  ) : (
                    <Typography>N/A</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {proposal.rates ? (
                    proposal.rates.map(rate => (
                      <Typography key={uniqid()}>{`${formatCurrency(rate.price)}`}</Typography>
                    ))
                  ) : (
                    <Typography>N/A</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {proposal.erc20ContractAddress ? (
                    <Typography>{proposal.erc20ContractAddress}</Typography>
                  ) : (
                    <Typography>N/A</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {proposal.rates &&
                    (proposal.msaId ? (
                      <Link to={`/contracts/${proposal.msaId}`} underline="hover">
                        Ver Contrato
                      </Link>
                    ) : (
                      <Button
                        variant="contained"
                        style={{ 'font-size': '13px' }}
                        className="btn"
                        onClick={() => setOpen({ [index]: true })}
                      >
                        Crear contrato
                      </Button>
                    ))}
                </TableCell>
                <CreateContract
                  rfp={rfp}
                  proposal={proposal}
                  open={open[index]}
                  index={index}
                  handleClose={() => setOpen({ [index]: false })}
                  createContract={createContract}
                />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

RFPSuppliersTable.propTypes = {
  rfp: PropTypes.shape({}).isRequired,
  proposals: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.shape({}).isRequired,
  createContract: PropTypes.func.isRequired,
};

export default RFPSuppliersTable;
