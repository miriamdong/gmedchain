import { getIotById, getAllIots } from '../services/iot';
import { pubsub } from '../subscriptions';
import { saveProduct } from '../db/models/modules/products';

export default {
  Query: {
    iot(_parent, args) {

      return {"id":"1"};
    },
    iots() {
      return  getAllIots();
    }
  },
};
