<template>
  <div class="pl-4">
    <h3>Movies</h3>
    <div class="row">
      <div class="p-2" v-for= "(card, id) in paginatedCards" v-bind:key="id">
        <card :title="card.Title" :description="card.Year"></card>
      </div>
    </div>
    <div class="row">
      <div class="">
        <b-pagination
            pills
            align="center"
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
      perPage: 10,
      totalItems: null
    }
  },

  methods: {
    async paginate(page_number) {
      let data = await this.fetchData(page_number);
      this.paginatedCards = data.Search;
      this.totalItems = data.totalResults;
    },
    onPageChanged(page) {
      this.paginate(page);
    },

    async fetchData(page) {
      const ghost = await this.$axios.$get(`http://www.omdbapi.com/?apikey=a76e7a55&s=ghost&page=${page+''}`)
      return ghost
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
