<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div id="wrapper" style="height: 100vh">
    <div
      id="content-wrapper"
      class="d-flex flex-column"
      style="
        background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
        background-size: cover;
      "
    >
      <div class="text-center">
        <main class="mt-5 form-signin">
          <form class="pt-5 pb-5 ps-3 pe-3 border rounded-3 bg-light">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input
                id="floatingInput"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                id="floatingPassword"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <NuxtLink to="/home" class="text-light"
              ><button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign In
              </button></NuxtLink
            >
            <p class="mt-5 mb-3 text-muted">&copy; 2022-2023</p>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
