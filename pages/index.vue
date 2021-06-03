<template>
  <div class="pl-4">
    <h3>Movies</h3>
    <div class="row">
      <div class="p-2" v-for= "(card, id) in paginatedCards" v-bind:key="id">
        <card :title="card.title" :description="card.description"></card>
      </div>
    </div>
    <div class="row">
      <div class="">
        <b-pagination
            pills
            align="center"
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
  data () {
    return {
      items: cards,
      paginatedCards: cards,
      currentPage: 1,
      perPage: 5,
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
