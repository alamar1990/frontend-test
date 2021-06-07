import Vue from 'vue'

Vue.mixin({
  methods: {
    checkIfInCart(cart, value) {
      return cart.some((item) => item.imdbID === value)
    },
  },
})
