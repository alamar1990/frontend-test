<template>
  <div class='app'>
    <top-bar></top-bar>
    <div class='container-fluid'>
      <div class='row'>
        <sidebar></sidebar>
        <main class='col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4'>
          <Nuxt />
        </main>
      </div>
    </div>

  </div>
</template>

<script>
import TopBar from '@/components/theme/topbar'
import Sidebar from '@/components/theme/sidebar'

export default {
  components: { TopBar, Sidebar }
}
</script>

<style>

</style>
