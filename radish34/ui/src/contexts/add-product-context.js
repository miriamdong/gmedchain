import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PRODUCT_UPDATE, GET_ALL_PRODUCTS, CREATE_PRODUCT } from '../graphql/product';

const AddProductContext = React.createContext([{}, () => {}]);

let listener;

const AddProductProvider = ({ children }) => {
  const { subscribeToMore, loading, data, error } = useQuery(GET_ALL_PRODUCTS);
  const [postProduct] = useMutation(CREATE_PRODUCT);
  const products = data ? data.products : [];

  useEffect(() => {
    if (!listener) {
      listener = subscribeToMore({
        document: GET_PRODUCT_UPDATE,
        variables: {},
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { newProduct } = subscriptionData.data;
          return { ...prev, products: [newProduct, ...prev.products] };
        },
      });
    }
  }, [subscribeToMore]);

  return (
    <AddProductContext.Provider value={{ products, loading, error, postProduct }}>{children}</AddProductContext.Provider>
  );
};

AddProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AddProductContext, AddProductProvider };
