import { getProductById, getAllProducts } from '../services/product';
import { pubsub } from '../subscriptions';
import { saveProduct } from '../db/models/modules/products';

const NEW_PRODUCT = 'NEW_PRODUCT';

export default {
  Query: {
    product(_parent, args) {
      return getProductById(args.uuid).then(res => res);
    },
    products() {
      return getAllProducts();
    },
  },
  Mutation: {
    createProduct: async (_parent, args) => {
      const myProduct = args.input;
      const product = (await saveProduct(myProduct))._doc;
      return { ...product };
    },
  },
  Subscription: {
    newProduct: {
      subscribe: () => {
        return pubsub.asyncIterator(NEW_PRODUCT);
      },
    },
  },
};
