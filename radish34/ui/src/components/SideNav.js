import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Inbox from '@material-ui/icons/Inbox';
import Send from '@material-ui/icons/Send';
import { groupBy, filter } from 'lodash';
import uniqid from 'uniqid';
import DropDown from './DropDown';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden',
    maxHeight: '100%',
    width: '100%',
    background: '#404E67',
    height: '100vh',
    marginTop: '1rem',
    color: 'white',
  },
  filterList: {
    marginTop: 0,
    paddingTop: 0,
    '.MuiFormControl-root': {
      margin: 0,
    },
  },
  createNewButton: {
    border: '1px solid red',
  },
  text: {
    fontWeight: 'bold',
    width: '100%',
    display: 'inline-block',
  },
  inboxOutbox: {
    marginLeft: '7%',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  badge: {
    width: '100%',
  },
  linkItem: {
    padding: '.2rem',
    paddingLeft: 0,
    paddingRight: '.5rem',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    width: '100%',
    padding: '.2rem',
    margin: 0,
    paddingRight: '1rem',
    alignItems: 'center',
    borderRadius: '0 16px 16px 0',
  },
  selected: {
    background: 'rgba(0,0,0,.05)',
  },
  icon: {
    marginRight: '1rem',
    marginLeft: '1rem',
  },
  label: {
    flexGrow: 1,
  },
  count: {
    fontWeight: 'normal',
  },
  dot: {
    width: '1rem',
    height: '1rem',
    background: 'silver',
    borderRadius: '10rem',
    margin: '0 .5rem 0 1rem',
    '&.dot-rfp': {
      background: '#F09085',
    },
    '&.dot-proposal': {
      background: '#F9D448',
    },
    '&.dot-purchaseorder': {
      background: '#A6CA72',
    },
    '&.dot-invoice': {
      background: '#5186ED',
    },
  },
}));

const categories = [
  { label: 'RFPs', key: 'rfp', url: '/notices/rfp' },
  { label: 'Propuestas', key: 'proposal', url: '/notices/proposal' },
  {
    label: 'Ordenes de compra',
    key: 'po',
    url: '/notices/purchase-order',
  },
  { label: 'Facturas', key: 'invoice', url: '/notices/invoice' },
  { label: 'Tablero', key: 'dashboard', url: '/dashboard' },
  // { label: 'MSA', key: 'msa', url: '/notices/msa', icon: DescriptionIcon },
  // { label: "Procurement Requests", key: "procurementRequest", url: "/notices/procurementrequest", icon: LibraryBooksIcon },
];

const Category = ({ icon: Icon, label, items = [], name, url, selected }) => {
  const classes = useStyles();
  const unresolved = filter(items, ['resolved', false]);

  return (
    <ListItem className={classes.linkItem}>
      <NavLink
        exact
        to={url}
        className={classes.link}
        activeClassName={classes.selected}
        isActive={() => selected}
      >
        {Icon ? (
          <Icon className={classes.icon} />
        ) : (
          <div className={`${classes.dot} dot-${name}`} />
        )}
        <div className={classes.label}>{label}</div>
        <div className={classes.count}>{unresolved.length ? unresolved.length : null}</div>
      </NavLink>
    </ListItem>
  );
};

Category.propTypes = {
  selected: PropTypes.bool,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
};

Category.defaultProps = {
  selected: false,
  icon: null,
  name: '',
  items: [],
};

const SideNav = ({ notices, selected }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [createForm, setCreateForm] = useState('');
  const groups = groupBy(notices, 'category');
  const results = groupBy(notices, 'status');
  const createForms = [
    { value: '/product/create', label: 'Añadir Producto' },
    { value: '/rfp/create', label: 'Crear nueva solicitud de propuesta' },
    { value: '/purchase-order/create', label: 'Crear nueva orden de compra' },
  ];

  const dropdownOnChange = e => {
    setCreateForm(e.target.value);
    history.push(e.target.value);
  };

  useEffect(() => {
    if (createForms.filter(form => form.value === location.pathname).length)
      setCreateForm(location.pathname);
  }, [createForms, location.pathname]);

  return (
    <div className={classes.root}>
      <List className={classes.filterList}>
        {/* <DropDown className={classes.createNewButton} items={createForms} onChange={dropdownOnChange} value={createForm} /> */}
        <Category icon={Inbox} label="Inbox" category={results.incoming} url="/notices/inbox" />
        <Category icon={Send} label="Outbox" category={results.outgoing} url="/notices/outbox" />
      </List>

      <Divider />

      <List className={classes.filterList}>
        {categories.map(({ label, key, url, icon }) => (
          <Category
            key={uniqid()}
            icon={icon}
            label={label}
            items={groups[key]}
            name={key}
            url={url}
            selected={key === selected}
          />
        ))}
      </List>

      <Divider />

      <List className={classes.filterList}>
        <Category label="Productos" url="/products" />
        <Category label="Socios" url="/partners" />
        <Category items={groups.msa} label="Contratos" url="/notices/contracts" />
      </List>
    </div>
  );
};

SideNav.propTypes = {
  selected: PropTypes.string,
  notices: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

SideNav.defaultProps = {
  selected: '',
};

export default SideNav;
