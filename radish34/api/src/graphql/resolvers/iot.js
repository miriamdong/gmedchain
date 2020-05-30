import { getIotById, getAllIots } from '../../db/models/modules/products';
import { pubsub } from '../subscriptions';


export default {
  Query: {
    iot(_parent, args) {
      return getIotById(args.uuid).then(res => res);
    },
    iots() {
      return getAllIots();
    },
  },
  Mutation: {

  },
  Subscription: {

  },
};
