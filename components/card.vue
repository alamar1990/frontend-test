<template>
  <div class="card shadow bg-white rounded mb-2" style="">
    <img src="@/assets/images/movie.png" style="align-self: center" class="card-img-top img-adjusted">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a href="#" class="btn btn-primary">Detalles</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    description: String,
  }

}
</script>

<style scoped>

</style>