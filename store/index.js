export const state = () => ({
  cart: [],
})

export const mutations = {
  ADD_CART_ITEM(state, item) {
    state.cart.push(item)
  },
}

export const actions = {
  addCartItem(context, item) {
    context.commit('ADD_CART_ITEM', item)
  },
}

export const getters = {
  getCart: (state) => {
    return state.cart
  },
}
