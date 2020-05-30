import gql from 'graphql-tag';

const ProductSchema = gql`
  extend type Query {
    Product(uuid: String!): Product
    Products: [Product]
  }
  extend type Mutation {
    createProduct(input: inputProduct!): Product
  }
  extend type Subscription {
    newProduct: Product
  }
  type Spec {
    name: String,
    desc: String
  }
  type Product {
    _id: String!
    desc: String!
    name: String!
    category: String!
    sku: String!
    availableQt: Int!
    price: Float!
    currency: String!
    productAdditionDate :Int!
    specs: [Spec]
  }
  input inputSpec {
    name: String,
    desc: String
  }
  input inputProduct {
    desc: String!
    name: String!
    category: String!
    sku: String!
    availableQt: Int!
    price: Float!
    currency: String!
    productAdditionDate :Int!
    specs: [inputSpec]
  }
`;

export default ProductSchema;
