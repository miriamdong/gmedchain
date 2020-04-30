import db from '../db';

export const getProductById = async uuid => {
  const product = await db.collection('Products').findOne({ _id: uuid });
  return product;
};

export const getAllProducts = async () => {
  const products = await db
    .collection('Products')
    .find({})
    .toArray();
  return products;
};
