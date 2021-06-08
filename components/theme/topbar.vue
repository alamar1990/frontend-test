<template>
  <nav class='navbar navbar-light bg-light p-3 topbar'>
    <div class='d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between'>
      <a class='navbar-brand'>
        Movie Shop
      </a>
      <div class="col navbar-brand" >
        <div class="cursor">
          <b-icon icon="camera-reels"></b-icon>
          <small class="text-muted">Peliculas Demo</small>
        </div>
      </div>

    </div>
    <div class='col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0'>
      <div class='navbar-brand'>
        <b-dropdown id='dropdown-header' toggle-class='px-2' no-caret>
          <template #button-content>
            <b-badge variant='warning' class='cursor'>{{ cartItemsCount }}</b-badge>
            <b-icon icon='cart'></b-icon>
          </template>
          <b-dropdown-text v-for='(item, id) in cart' v-bind:key='id'>
            <b-icon icon='cart-dash' class='cursor pr-1' variant='danger' @click='deleteFromCart(item)'></b-icon>
            <small class='text-muted'>{{ item.title }}</small>
          </b-dropdown-text>
        </b-dropdown>
      </div>

      <div class='dropdown'>
        <button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown'
                aria-expanded='false'>
          Jhon Doe
        </button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'top-bar',
  methods: {
    deleteFromCart(item) {
      this.$store.dispatch('removeCartItem', item)
    }
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.getCart.length
    },
    cart() {
      return this.$store.getters.getCart
    }
  }

}
</script>

<style>

</style>
