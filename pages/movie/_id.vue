<template>
  <div class='row pl-3'>
    <b-spinner v-if="loading" class="spinner" label="Loading..."></b-spinner>
    <div v-else class="row" >
      <div class="col-md-6">
        <div class="">
          <b-img-lazy
              fluid
              v-bind:src='movieData.Poster'
              class='img-adjusted card-image' alt='Movie Poster'></b-img-lazy>
        </div>

      </div>
      <div class="col-md-6">
        <h4 class="">
          {{ movieData.Title }}
        </h4>
        <p>
          {{ movieData.Plot }}
        </p>
        <div class=''>
          <span> <strong>Year:</strong> {{ movieData.Year }}</span>
          <span> <strong>Actors:</strong> {{ movieData.Actors }}</span>
          <span><strong>Director:</strong> {{ movieData.Director }}</span>
        </div>
        <div class=''><strong>Genre : </strong> <span class='amount-old'>{{ movieData.Genre }}</span></div>
        <div class="form-group">
          <label>Language</label>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "_id",
  data() {
    return {
      loading: true,
      movieData: null
    }
  },
  async created() {
    if (this.$route.params.id) {
      await this.$store.dispatch('fetchMovieById', { imdbID: this.$route.params.id })
      this.movieData = this.getMovieDetails
      this.loading = !this.getMovieDetails
      await this.$store.dispatch('history/addHistoryItem', {
        imdbID: this.$route.params.id,
        title: this.movieData.Title
      })
    }
  },
  mounted() {

  },
  computed: {
    getMovieDetails() {
      return this.$store.getters.getMovieDetails
    }
  }
}
</script>

<style scoped>

</style>
