<template>
  <div v-if="restaurant">
    <h3>{{ restaurant.name }}</h3>
    <p>{{ restaurant.description }}</p>
    <nuxt-link :to="`${restaurant.id}/edit`">Edit</nuxt-link>
    <nuxt-link to="/restaurants">Back</nuxt-link>
  </div>
</template>

<script>
import { FIND_RESTAURANT_QUERY } from '~/graphql/queries'
import { clearTimeout } from 'timers';

export default {
  apollo: {
    restaurant: {
      query: FIND_RESTAURANT_QUERY,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      },
      update(data) {
        return data.restaurant
      }
    }
  }
}
</script>

