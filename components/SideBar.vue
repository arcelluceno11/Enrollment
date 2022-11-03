<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <nav
    class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
    style="
      background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
      background-size: cover;
    "
  >
    <div class="container-fluid d-flex flex-column p-0">
      <a
        class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        href="#"
      >
        <div class="sidebar-brand-icon">
          <i class="fas fa-university"></i>
        </div>
        <div class="sidebar-brand-text mx-3"><span>University</span></div>
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
            <i class="fas fa-bars"></i>
            <span>Menu</span>
          </a>
          <div id="collapseReports" class="collapse">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="">Library</a>
              <a class="collapse-item" href="">Art</a>
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
  ],
}
</script>
