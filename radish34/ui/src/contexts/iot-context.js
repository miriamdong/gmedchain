import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ALL_IOTS } from '../graphql/iot';

const IotContext = React.createContext([{}, () => {}]);

let listener;

const GetAllIotsProvider = ({ children }) => {
  const { loading, data, error } = useQuery(GET_ALL_IOTS);
  const iots = data ? data.iots : [];
  console.log('asdasdasdasd-------------' + iots[0])
  useEffect(() => {
    if (!listener) {
    }
  });

  return (
    <IotContext.Provider value={{ iots, loading, error }}>{children}</IotContext.Provider>
  );
};

GetAllIotsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { IotContext, GetAllIotsProvider };
