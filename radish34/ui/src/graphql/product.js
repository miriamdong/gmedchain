import gql from 'graphql-tag';

export const PRODUCT_ATTRIBUTES = gql`
  fragment PRODUCT_ATTRIBUTES on Product {
    _id
    name
    desc
    category
    sku
    availableQt
    price
    currency
    productAdditionDate
    specs {
      name
      desc
    }
  }
`;

export const GET_PRODUCT_UPDATE = gql`
  subscription onNewProduct {
    newProduct {
      ...PRODUCT_ATTRIBUTES
    }
  }
  ${PRODUCT_ATTRIBUTES}
`;

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      ...PRODUCT_ATTRIBUTES
    }
  }
  ${PRODUCT_ATTRIBUTES}
`;

export const CREATE_PRODUCT = gql`
  mutation createProducts($input: inputProduct!) {
    createProduct(input: $input) {
      ...PRODUCT_ATTRIBUTES
    }
  }
  ${PRODUCT_ATTRIBUTES}
`;

