export const state = () => ({
  paginatedMovies: null,
  movieDetails: null,
  cart: [],
})

export const mutations = {
  SET_MOVIE_DETAILS(state, movieDetails) {
    state.movieDetails = movieDetails
  },
  SET_PAGINATED_MOVIES(state, paginatedMovies) {
    state.paginatedMovies = paginatedMovies
  },
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

  async fetchMoviesByQuery(context, params) {
    try {
      const result = await this.$axios.$get(`http://www.omdbapi.com/?apikey=a76e7a55&s=${params.query + ''}&page=${params.page + ''}`)
      if (result.Response) {
        context.commit('SET_PAGINATED_MOVIES', result)
      }
    } catch (e) {
      return e
    }

  },

  async fetchMovieById(context, params) {
    try {
      const result = await this.$axios.$get(`http://www.omdbapi.com/?apikey=a76e7a55&i=${params.imdbID + ''}`)
      if (result.Response) {
        context.commit('SET_MOVIE_DETAILS', result)
      }
    } catch (e) {
      return e
    }

  }
}

export const getters = {
  getCart: (state) => {
    return state.cart
  },
  getPaginatedMovies: (state) => {
    return state.paginatedMovies
  },
  getMovieDetails: (state) => {
    return state.movieDetails
  },
}
