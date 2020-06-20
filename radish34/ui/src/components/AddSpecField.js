import React, { useState } from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import TextField from './TextField';

const useStyles = makeStyles(() => ({
  table: {
    marginBottom: '2rem',
  },
  tableCell: {
    borderBottom: 'none',
    padding: 0,
    marginBottom: '2rem',
  },
  tableCellButton: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
  },
  circleIcon: {
    margin: '0.5rem',
  },
  errorMessage: {
    color: 'red',
  },
}));

const AddSpecField = ({ formik }) => {
  const classes = useStyles();
  const history = useHistory();
  const [disabled, setDisabled] = useState({});
  const [contractAddress, setContractAddress] = useState('');

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Nombre de la especificación</TableCell>
          <TableCell>Descripción</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <FieldArray
          name="specs"
          render={arrayHelpers => (
            <>
              {formik.values.specs.map((spec, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>
                      <Field
                        name={`specs.${index}.name`}
                        component={TextField}
                        onChange={formik.handleChange}
                        disabled={disabled[index]}
                        className={classes.field}
                        value={spec.name || ''}
                      />
                    </TableCell>
                    <TableCell>
                      <Field
                        name={`specs.${index}.desc`}
                        component={TextField}
                        onChange={formik.handleChange}
                        disabled={disabled[index]}
                        className={classes.field}
                        value={spec.desc || ''}
                      />
                    </TableCell>
                    <TableCell className={index === 0 ? classes.tableCellButton : undefined}>
                      <Button
                        type="button"
                        onClick={() => {
                          setDisabled({ ...disabled, [index]: false });
                          arrayHelpers.remove(index);
                        }}
                      >
                        REMOVER
                      </Button>
                      {!disabled[index] ? (
                        <Button
                          type="button"
                          onClick={() => {
                            if (
                              formik.values.specs[index].name &&
                              formik.values.specs[index].desc
                            ) {
                              setDisabled({ ...disabled, [index]: true });
                            }
                          }}
                        >
                          AÑADIR
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={() => setDisabled({ ...disabled, [index]: false })}
                        >
                          EDITAR
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>
                      <ErrorMessage
                        name={`specs.${index}.name`}
                        render={msg => (
                          <Typography className={classes.errorMessage}>{msg}</Typography>
                        )}
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <ErrorMessage
                        name={`specs.${index}.desc`}
                        render={msg => (
                          <Typography className={classes.errorMessage}>{msg}</Typography>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
              {
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    <Button
                      type="button"
                      onClick={() => !formik.values.specs.includes('') && arrayHelpers.push('')}
                      style={{ color: '#50A75D' }}
                    >
                      <AddCircleOutline />
                      Agregar especificación
                    </Button>
                  </TableCell>
                </TableRow>
              }
              <TableRow>
                <TableCell className={classes.tableCell}>
                  <ErrorMessage
                    name="specs"
                    render={error =>
                      !Array.isArray(error) && (
                        <Typography className={classes.errorMessage}>{error}</Typography>
                      )
                    }
                  />
                </TableCell>
              </TableRow>
            </>
          )}
        />
      </TableBody>
    </Table>
  );
};

export default AddSpecField;
