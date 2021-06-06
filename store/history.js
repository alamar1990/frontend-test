export const state = () => ({
  history: [],
})

export const mutations = {
  ADD_HISTORY_ITEM(state, item) {
    state.history.push(item)
  },
}

export const actions = {
  addHistoryItem(context, item) {
    context.commit('ADD_HISTORY_ITEM', item)
  },
}
