<template>
  <div class='card shadow bg-white rounded mb-2'>
    <b-badge variant='success' class='badge-zoom-in cursor' v-on:click="$nuxt.$emit('zoomInPoster', image)">
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
      @click="addToHistory"
      fluid
      v-bind:src='image'
      class='card-img-top img-adjusted card-image cursor' alt='Movie Poster'></b-img-lazy>
    <div class='card-body cursor' @click="addToHistory">
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
  mounted() {

  },
  methods: {
    addToHistory(){
      this.$nuxt.$router.push(`/movie/${this.imdbID}`)
    },
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
  computed: {
  }

}
</script>

<style scoped>

</style>
