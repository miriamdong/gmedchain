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
  type Product {
    _id: String!
    desc: String!
    name: String!
    productAdditionDate :Int!
  }
  input inputProduct {
    desc: String!
    name: String!
    productAdditionDate: Int!
  }
`;

export default ProductSchema;
