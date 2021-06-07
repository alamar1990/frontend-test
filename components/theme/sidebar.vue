<template>
  <nav class='col-md-3 col-lg-2 d-md-block bg-secondary sidebar collapse'>
    <div class='position-sticky'>
      <ul class='nav flex-column w-100'>
        <li class='nav-item alert-warning'>
          <a class='nav-link'>
            <b-icon icon="clock-history"></b-icon>
            <span class='ml-2'>Historial</span>
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' v-for='(item, id) in getHistory'>
            <b-icon icon="arrow-right-short"></b-icon>
            <span class='ml-2'>{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'sidebar',
  computed: {
    getHistory() {
      return this.$store.getters["history/getHistory"]
    }
  }
}
</script>

<style>

</style>
