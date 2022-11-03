<template>
  <div>
    <div id="wrapper" style="height: 100vh">
      <div
        id="content-wrapper"
        class="d-flex flex-column"
        style="
          background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
          background-size: cover;
        "
      >
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
              <h1 class="display-4 fw-bold lh-1 mb-3 text-dark">Welcome</h1>
              <p class="col-lg-10 fs-4 text-dark">
                “Education is the passport to the future, for tomorrow belongs
                to those who prepare for it today.” —Malcolm X
              </p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
              <form class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input id="checkbox" type="checkbox" value="remember-me" />
                    Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Sign up
                </button>
                <div class="mt-3">
                  <div class="row">
                    <div class="col">
                      <div class="h5">Already have account?</div>
                    </div>
                    <div class="col">
                      <NuxtLink to="/signin"
                        ><button
                          type="button"
                          class="w-100 btn btn-md btn-outline-primary"
                        >
                          Sign In
                        </button></NuxtLink
                      >
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <small class="text-muted"
                  >By clicking Sign up, you agree to the terms of use.</small
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
