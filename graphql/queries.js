import gql from 'graphql-tag'

export const ALL_RESTAURANTS_QUERY = gql`
  query AllRestaurantsQuery {
    restaurants {
      id
      name
      description
    }
  }
`

export const FIND_RESTAURANT_QUERY = gql`
  query FindRestaurantQuery($id: ID!) {
    restaurant(id: $id) {
      id
      name
      description
    }
  }
`
