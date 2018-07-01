<template>
  <div>
  <h3>Restaurantes</h3>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        <nuxt-link :to="`restaurant/${restaurant.id}`">
          {{ restaurant.name }} {{ restaurant.description }}
        </nuxt-link>
      </li>

      <br />

      <p>
        <nuxt-link to="restaurant/new">Cadastrar</nuxt-link>
        |
        <nuxt-link to="/">Inicio</nuxt-link>
      </p>
    </ul>
  </div>
</template>

<script>
import { ALL_RESTAURANTS_QUERY } from '../graphql/queries'

export default {
  apollo: {
    restaurants: {
      prefetch: true,
      query: ALL_RESTAURANTS_QUERY
    }
  },
  components: {

  }
}
</script>
