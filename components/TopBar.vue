<template>
  <nav
    class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
  >
    <div class="container-fluid">
      <button
        id="sidebarToggleTop"
        class="btn btn-link d-md-none rounded-circle me-3"
        type="button"
      >
        <i class="fas fa-bars"></i>
      </button>
      <ul class="navbar-nav flex-nowrap ms-auto">
        <div class="d-none d-sm-block topbar-divider"></div>
        <li class="nav-item dropdown no-arrow">
          <div class="nav-item dropdown no-arrow">
            <a
              class="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              href="#"
              ><span class="d-none d-lg-inline me-2 text-gray-600 small"
                >Arcel Luceno</span
              ><img
                class="border rounded-circle img-profile"
                src="https://scontent.fceb3-1.fna.fbcdn.net/v/t1.6435-9/160261895_3920129788080738_6474459771979232587_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHdRebv3gZlq2Baap9hofhSB2SL-QB7SSUHZIv5AHtJJWF-fEIF30uvUEGl4DgOfz-AZoiyTrUdHIp4caDmby_7&_nc_ohc=CrdKaVnu1MwAX-dCfQV&tn=DWO7zfUHAIUicRxc&_nc_ht=scontent.fceb3-1.fna&oh=00_AfDS4TytRnULt9cmYo_U5Lf2VfujKrHTi0w7j_HEuTMQSg&oe=638B2DE6"
            /></a>
            <div
              class="dropdown-menu shadow dropdown-menu-end animated--grow-in"
            >
              <a class="dropdown-item" href="#"
                ><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i
                >Profile</a
              >
              <div class="dropdown-divider"></div>
              <NuxtLink to="/">
                <a class="dropdown-item" href="#"
                  ><i
                    class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"
                  ></i
                  >Logout</a
                >
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
