import mongoose from 'mongoose';
import { uuid } from 'uuidv4';

const ProductSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      lowercase: true,
      trim: true,
      // Globally unique across all Products (uuid V4)
    },
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    category: {
      type: String,
    },
    sku: {
      type: String,
    },
    availableQt: {
      type: Number,
    },
    price: {
      type: Number,
    },
    currency: {
      type: String,
    },
    specs: [
      { name: String, desc: String }
    ],
    productAdditionDate: {
      type: Number
    }
  },
  {
    collection: 'Products',
    versionKey: false,
  },
);

const Product = mongoose.model('products', ProductSchema);

export const getProductById = async uuid => {
  const product = await Product.findOne({ _id: uuid });
  return product;
};

export const getAllProducts = async () => {
  const products = await Product.find({}).toArray();
  return products;
};

export const saveProduct = async doc => {
  const newProduct = doc;
  newProduct._id = await uuid();
  console.log(`Saving new Product (uuid: ${newProduct._id})...`);
  const result = await Product.create([newProduct], { upsert: true, new: true });
  return result[0];
};

export default {
  getProductById,
  getAllProducts,
  saveProduct
};
