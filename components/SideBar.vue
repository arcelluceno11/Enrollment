<template>
  <nav
    class="
      navbar navbar-dark
      align-items-start
      sidebar sidebar-dark
      accordion
      bg-gradient-primary
      p-0
    "
  >
    <div class="container-fluid d-flex flex-column p-0">
      <a
        class="
          navbar-brand
          d-flex
          justify-content-center
          align-items-center
          sidebar-brand
          m-0
        "
        href="#"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3"><span>Brand</span></div>
      </a>
      <hr class="sidebar-divider my-0" />
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <!-- Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-toggle="collapse"
            href="#collapseReports"
            role="button"
            aria-expanded="false"
            aria-controls="collapseReports"
          >
            <i class="fas fa-fw fa-wrench"></i>
            <span>Menu</span>
          </a>
          <div id="collapseReports" class="collapse">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="">History</a>
              <a class="collapse-item" href="">Sales</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  plugins: [
    { src: '~/plugins/js/bootstrap.min.js' },
    { src: '~/plugins/js/theme.js' },
  ]
}
</script>
