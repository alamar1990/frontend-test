<template>
  <div class='card shadow bg-white rounded mb-2'>
    <b-badge variant='success' class='badge-zoom-in cursor'>
      <b-icon icon='zoom-in'></b-icon>
    </b-badge>
    <b-badge v-if='!this.checkIfInCart(this.$store.getters.getCart, this.imdbID)'
             variant='warning' class='badge-add-cart cursor' @click='addToCart'>
      <b-icon icon='cart-plus'></b-icon>
    </b-badge>
    <b-badge v-else variant='warning' class='badge-add-cart cursor' @click='removeFromCart'>
      <b-icon icon='cart-dash'></b-icon>
    </b-badge>
    <b-img-lazy
      fluid
      v-bind:src='image'
      class='card-img-top img-adjusted card-image' alt='Movie Poster'></b-img-lazy>
    <div class='card-body'>
      <h6 class='card-text-title'>{{ title }}</h6>
      <small class='card-text'>{{ description }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    imdbID: String,
    title: String,
    description: String,
    image: String
  },
  methods: {
    addToCart() {
      if (!this.checkIfInCart(this.$store.getters.getCart, this.imdbID)) {
        this.$store.dispatch('addCartItem', { imdbID: this.imdbID, title: this.title })
      }
    },
    removeFromCart() {
      if (this.checkIfInCart(this.$store.getters.getCart, this.imdbID)) {
        this.$store.dispatch('removeCartItem', this.imdbID)
      }
    }
  },
  computed: {}

}
</script>

<style scoped>

</style>
