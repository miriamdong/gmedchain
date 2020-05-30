import gql from 'graphql-tag';

const IotSchema = gql`
  extend type Query {
    iot(id: String!): IOT
    iots:[IOT]
  }
  extend type Mutation {
    createIot(input: inputIot!): IOT
  }
  extend type Subscription {
    newIot: IOT
  }
  type IOT {
    id: String
    type: String
    account_number: String
    locationID: String
    commission_date: String
    temperature: String
    humidity: String
    timestamp: String
    _rid: String
    _self: String
    _etag: String
    _attachments: String
    _ts: String
  }
  input inputIot {
    desc: String
    name: String
    IotAdditionDate: Int
  }
`;

export default IotSchema;
