import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
    mutation createProduct ($name: String!, $description: String, $quantity: Int, $price: Float) {
        createProduct(name: $name, description: $description, quantity: $quantity, price: $price) {
            _id
            name
            description
            quantity
            price
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct ($id: ID!, $name: String, $description: String, $quantity: Int!, $price: Float) {
        updateProduct(_id: $id, name: $name, description: $description, quantity: $quantity, price: $price) {
            _id
            name
            description
            quantity
            price
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation deleteProduct ($id: ID!){
        deleteProduct(_id:$id) {
            _id
        }
    }
`;
