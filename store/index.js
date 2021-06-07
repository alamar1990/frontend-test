export const state = () => ({
  cart: [],
})

export const mutations = {
  ADD_CART_ITEM(state, item) {
    state.cart.push(item)
  },
  REMOVE_CART_ITEM(state, item) {
    state.cart.splice(state.cart.indexOf(item), 1)
  },
}

export const actions = {
  addCartItem(context, item) {
    context.commit('ADD_CART_ITEM', item)
  },
  removeCartItem(context, item) {
    context.commit('REMOVE_CART_ITEM', item)
  },
}

export const getters = {
  getCart: (state) => {
    return state.cart
  },
}
