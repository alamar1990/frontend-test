<template>
  <div class='card shadow bg-white rounded mb-2'>
    <b-badge variant='success' class='badge-zoom-in cursor'>
      <b-icon icon='zoom-in'></b-icon>
    </b-badge>
    <b-badge variant='warning' class='badge-add-cart cursor'>
      <b-icon icon='cart-plus'></b-icon>
    </b-badge>
    <b-img-lazy
      fluid
      v-bind:src='image'
      style='align-self: center; max-width: 100%; height: 60%;'
      class='card-img-top img-adjusted' alt='Movie Poster'></b-img-lazy>
    <div class='card-body'>
      <h6 class='card-text-title'>{{ title }}</h6>
      <small class='card-text'>{{ description }}</small>
      <!--      <a href="#" class="btn btn-primary">Detalles</a>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    description: String,
    image: String
  }

}
</script>

<style scoped>

</style>
