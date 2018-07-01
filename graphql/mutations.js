import gql from 'graphql-tag'

export const CREATE_RESTAURANT = gql`
  mutation CreateRestaurant($name: String!, $description: String!) {
    createRestaurant(name: $name, description: $description) {
      id
      name
      description
    }
  }
`
