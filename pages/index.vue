<template>
  <div class='pl-4'>
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
      <div class='p-2 pb-2' v-for='(card, id) in paginatedCards' v-bind:key='id'>
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
      paginatedCards: null,
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
    zoomInPoster(value) {
      console.log(value)
    },
    async search() {
      if (this.searchQuery) {
        await this.$store.dispatch('history/addHistoryItem', this.searchQuery)
        await this.paginate()
      }
    },
    async showMovieDetails(card) {
      // console.log(card.id)
    },
    async paginate(page_number) {
      let data = await this.fetchData(page_number, this.searchQuery)
      this.paginatedCards = data.Search
      this.totalItems = data.totalResults

      // this.paginatedCards = cards
      // this.totalItems = cards.length
    },
    onPageChanged(page) {
      this.paginate(page)
    },

    async fetchData(page, query) {
      try {
        const result = await this.$axios.$get(`http://www.omdbapi.com/?apikey=a76e7a55&s=${query + ''}&page=${page + ''}`)
        if (result.Response) {
          return result
        }
        return result.Error
      } catch (e) {
        return e
      }

    }
  },

  mounted(){
    this.paginate(1);
  },

  computed: {
  }
}
</script>

<style>
/deep/ .my-class {
  background: black;
  color: white;
}

/deep/ .my-second-class > .modal-dialog > .modal-content > .modal-header {
  background: black;
  color: white;
}

</style>
