<template>
  <div class="">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 mb-2 mt-2 mb-lg-0"
           v-for= "(card, id) in paginatedCards" v-bind:key="id">
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
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 mb-2 mt-2 mb-lg-0">
        <b-pagination
            @change="onPageChanged"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
        />
      </div>
    </div>

  </div>
</template>

<script>
const cards = [
  {
    title: 'card1',
    description: 'card1Description'
  },
  {
    title: 'card2',
    description: 'card1Description2'
  },
  {
    title: 'card3',
    description: 'card1Description3'
  },
  {
    title: 'card4',
    description: 'card1Description4'
  },
  {
    title: 'card5',
    description: 'card1Description5'
  },
  {
    title: 'card6',
    description: 'card1Description6'
  },
  {
    title: 'card7',
    description: 'card1Description7'
  },
  {
    title: 'card8',
    description: 'card1Description8'
  },
  {
    title: 'card9',
    description: 'card1Description9'
  },
  {
    title: 'card10',
    description: 'card1Description10'
  },
  {
    title: 'card11',
    description: 'card1Description11'
  }
]

export default {
  data () {
    return {
      items: cards,
      paginatedCards: cards,
      currentPage: 1,
      perPage: 3,
      totalRows: cards.length
    }
  },

  methods: {
    paginate(page_size, page_number) {
      let cardsToParse = this.items;
      this.paginatedCards = cardsToParse.slice(
          page_number * page_size,
          (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    }
  },

  mounted(){
    this.paginate(this.perPage, 0);
  }
}
</script>

<style>


</style>
