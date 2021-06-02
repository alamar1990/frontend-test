<template>
  <nav class='navbar navbar-light bg-light p-3 topbar'>
    <div class='d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between'>
      <a class='navbar-brand'>
        Movies
      </a>
      <div class="col navbar-brand" >
        <div class="cursor">
          <b-icon icon="camera-reels"></b-icon>
          <small class="text-muted">Peliculas Demo</small>
        </div>
      </div>

    </div>
    <div class='col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0'>
      <div class="navbar-brand">
        <b-icon icon="cart"></b-icon>
      </div>
      <div class='dropdown'>
        <button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown'
                aria-expanded='false'>
          Jhon Doe
        </button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'top-bar'
}
</script>

<style>

</style>
