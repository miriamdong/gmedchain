import gql from 'graphql-tag';


export const IOT_ATTRIBUTES = gql`
  fragment IOT_ATTRIBUTES on IOT {
    id
  }
`;

//TODO
export const GET_ALL_IOTS = gql`
  query getAllIots {
    iots {
      ...IOT_ATTRIBUTES
    }
  }
  ${IOT_ATTRIBUTES}
`;

