<template>
  <nav class='navbar navbar-light bg-light p-3 topbar'>
    <div class='d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between'>
      <a class='navbar-brand'>
        Movies
      </a>
    </div>
    <div class='col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0'>
      <button type="button" class="btn btn-primary btn-rounded btn-icon"> <i class="fa fa-user"></i> </button>
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
