import { pubsub } from '../../subscriptions';
import { getServerStatus } from '../../../db/models/baseline/server/status';

const SERVER_STATUS_UPDATE = 'SERVER_STATUS_UPDATE';

export default {
  Query: {
    serverStatus: async () => {
      const status = await getServerStatus();
      return status;
    },
  },
  Subscription: {
    serverStatusUpdate: {
      subscribe: () => {
        return pubsub.asyncIterator(SERVER_STATUS_UPDATE);
      },
    },
  },
};
