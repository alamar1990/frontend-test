<template>
  <div class='pl-4'>
    <b-spinner v-if="loading" class="spinner" label="Loading..."></b-spinner>
    <div>
      <b-modal id="modal-zoomed-image" ok-only hide-header hide-footer>
        <b-img-lazy v-bind:src='modalImage' class='card-img-top img-adjusted'></b-img-lazy>
      </b-modal>
      <div class='row pb-3'>
        <h3 class='pr-3'>Movies</h3>
        <b-form inline @submit.prevent='search'>
          <b-form-input id='searchInput' v-model='searchQuery' class='mr-sm-2'
                        placeholder='Escriba un nombre'></b-form-input>
          <b-button class='my-2 my-sm-0' type='submit'>Buscar</b-button>
        </b-form>
      </div>
      <div class='row pb-4'>
        <div class='p-2 pb-2' v-for='(card, id) in paginatedMovies' v-bind:key='id'>
          <card :imdbID='card.imdbID'
                :title='card.Title'
                :description='card.Year'
                :image='card.Poster'></card>
        </div>
      </div>
      <div class='row '>
        <div class=''>
          <b-pagination
              pills
              align='center'
              @change='onPageChanged'
              :total-rows='totalItems'
              :per-page='perPage'
              v-model='currentPage'
              class='my-0'
          />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Card from '@/components/card'

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
  components: { Card },
  data() {
    return {
      loading: true,
      paginatedMovies: null,
      currentPage: 1,
      searchQuery: 'Interstellar',
      perPage: 10,
      totalItems: null,
      modalImage: null
    }
  },
  created() {
    this.$nuxt.$on('zoomInPoster', (value) => {
      if (value){
        this.modalImage = value
        this.$bvModal.show('modal-zoomed-image')
      }
    })
  },
  beforeDestroy(){
    this.$nuxt.$off('zoomInPoster')
  },

  methods: {
    async search() {
      if (this.searchQuery) {
        await this.$store.dispatch('history/addHistoryItem', this.searchQuery)
        await this.paginate()
      }
    },
    async paginate(page_number) {
      try {
        await this.$store.dispatch('fetchMoviesByQuery', {page: page_number, query: this.searchQuery})
        this.paginatedMovies = this.getPaginatedMovies.Search
        this.totalItems = this.getPaginatedMovies.totalResults
        this.loading = !this.getPaginatedMovies
      } catch (e) {
        console.error(e)
      }

    },
    onPageChanged(page) {
      this.paginate(page)
    },

  },

  mounted(){
    this.paginate(1);
  },

  computed: {
    getPaginatedMovies() {
      return this.$store.getters.getPaginatedMovies
    }
  }
}
</script>

<style>

</style>
