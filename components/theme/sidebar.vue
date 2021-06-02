<template>
  <nav id='sidebar' class='col-md-3 col-lg-2 d-md-block bg-secondary sidebar collapse'>
    <div class='position-sticky'>
      <ul class='nav flex-column w-100'>
        <li class='nav-item'>
          <a class='nav-link active'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'
                 stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'
                 class='feather feather-home'>
              <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
              <polyline points='9 22 9 12 15 12 15 22'></polyline>
            </svg>
            <span class='ml-2'>Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'sidebar'
}
</script>

<style>

</style>
