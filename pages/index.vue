<template>
  <div class='pl-4'>
    <div class='row'>
      <h3 class='pr-3'>Movies</h3>
      <b-form inline @submit.prevent='search'>
        <b-form-input id='searchInput' v-model='searchQuery' class='mr-sm-2'
                      placeholder='Escriba un nombre'></b-form-input>
        <b-button class='my-2 my-sm-0' type='submit'>Buscar</b-button>
      </b-form>
    </div>
    <div class='row'>
      <div class='p-2' v-for='(card, id) in paginatedCards' v-bind:key='id'>
        <card :title='card.Title' :description='card.Year'></card>
      </div>
    </div>
    <div class='row'>
      <div class=''>
        <b-pagination
          pills
          align='center'
            @change="onPageChanged"
            :total-rows="totalItems"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Card from '@/components/card'

export default {
  components: { Card },
  data () {
    return {
      paginatedCards: null,
      currentPage: 1,
      searchQuery: 'Interstellar',
      perPage: 10,
      totalItems: null
    }
  },

  methods: {
    async search() {
      console.log(this.searchQuery)
      if (this.searchQuery) {
        await this.paginate(this.searchQuery)
      }

    },
    async paginate(page_number) {
      let data = await this.fetchData(page_number, this.searchQuery)
      this.paginatedCards = data.Search
      this.totalItems = data.totalResults
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
    totalRows() {
      return cards.length
    }
  }
}
</script>

<style>


</style>
