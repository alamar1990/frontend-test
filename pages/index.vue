<template>
  <div class="">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 mb-2 mt-2 mb-lg-0"
           v-for= "(card, id) in cards" v-bind:key="id">
        <div class="card shadow bg-white rounded mb-2" style="">
          <img src="@/assets/images/movie.png" style="align-self: center" class="card-img-top img-adjusted">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
            <a href="#" class="btn btn-primary">Detalles</a>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },
        {
          title: 'card1',
          description: 'card1Description'
        },


      ]
    }
  },
}
</script>

<style>


</style>
