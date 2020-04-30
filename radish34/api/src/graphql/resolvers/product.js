import { getProductById, getAllProducts } from '../../db/models/modules/products';
import { pubsub } from '../subscriptions';

const NEW_PRODUCT = 'NEW_PRODUCT';

export default {
  Query: {
    rfp(_parent, args) {
      return getProductById(args.uuid).then(res => res);
    },
    rfps() {
      return getAllProducts();
    },
  },
  Mutation: {
    // TODO: Connect this to the new baseline function 'createProduct'
    createProduct: async (_parent, args, context) => {},
  },
  Subscription: {
    newProduct: {
      subscribe: () => {
        return pubsub.asyncIterator(NEW_PRODUCT);
      },
    },
  },
};
