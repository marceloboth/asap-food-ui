<template>
  <div>
    <h3>Novo Restaurante</h3>

    <p>{{message}}</p>

    <div>
      <input v-model="name" type="text">
      <input v-model="description" type="text">
      <button @click="createRestaurant()">Salvar</button>
    </div>

    <nuxt-link to="/restaurants">Voltar</nuxt-link>
  </div>
</template>

<script>
import { CREATE_RESTAURANT } from '../../graphql/mutations'
import { ALL_RESTAURANTS_QUERY } from '../../graphql/queries'

export default {
  data() {
    return {
      name: '',
      description: '',
      message: ''
    }
  },
  methods: {
    createRestaurant() {
      console.log(this.name)
      console.log(this.description)

      const name = this.name
      const description = this.description
      this.name = ''
      this.description = ''

      this.$apollo.mutate({
        mutation: CREATE_RESTAURANT,
        variables: {
          name,
          description
        },

        update: (store, { data: { createRestaurant } }) => {
          const data = store.readQuery({
            query: ALL_RESTAURANTS_QUERY
          })

          data.restaurants.push(createRestaurant)
          store.writeQuery({
            query: ALL_RESTAURANTS_QUERY,
            data
          })
        }
      }).then((data) => {
        this.$router.push({path: "/restaurants"})
      }).catch((error) => {
        console.error(error)
        this.message = 'Algo errado'
      })

    }
  }
}
</script>

