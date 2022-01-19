import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query products {
        products {
            _id
            name
            description
            quantity
            price
        }
    }
`;

export const QUERY_PRODUCT = gql`
    query product ($id: ID!) {
        product(_id: $id) {
            _id
            name
            description
            quantity
            price
        }
    }
`;