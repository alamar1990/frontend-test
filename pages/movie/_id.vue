<template>
  <div class='row pl-3'>
    <div class="col-md-6">
      <div class="">
        <b-img-lazy
            fluid
            v-bind:src='"@/assets/images/movie.png"'
            class='img-adjusted card-image' alt='Movie Poster'></b-img-lazy>
      </div>

    </div>
    <div class="col-md-6">
      <h4 class="">
        Guardians of the galaxy
      </h4>
      <p>
        The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.
      </p>
      <div class="">
        <span> <strong>Plot:</strong></span>
        <span><strong>Director:</strong></span>
      </div>
      <div class=""> <strong>Genre : </strong> <span class="amount-old">Action</span>  <span class="pro-price"> Comedy</span></div>
      <div class="form-group">
        <label>Language</label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "_id",
  data() {
    return {
      movieData: null,
    }
  },
  validate(data) {
    return true
    // return /^[tt]{2}[0-9]+\z/.test(data.params.id)
  }
}
</script>

<style scoped>

</style>