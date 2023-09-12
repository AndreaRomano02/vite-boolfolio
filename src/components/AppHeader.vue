<script>
export default {
};
</script>

<template>
  <header>
    <nav id="layout-nav" class="navbar navbar-expand-md  navbar-dark">
      <div class="container">
        <div class="navbar-brand">
          <img class="logo" src="../../public/logo.ico" alt="LOGO">
          <h4>ANDREA ROMANO</h4>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav me-auto">
            <li class="nav-item fs-5">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item fs-5">
              <RouterLink class="nav-link" to="/projects">Projects</RouterLink>

            </li>
          </ul>

          <!-- Right Side Of Navbar -->

          <!-- # Social -->
          <div class="social text-white d-flex gap-3">
            <a href="https://www.linkedin.com/in/andrea-romano-b34939227/" target="_blank"><i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/AndreaRomano02" target="_blank"><i class="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/andrea_romano___/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/andrea.romano.773981/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
          </div>

          <!-- <ul class="navbar-nav ml-auto">
          @guest
          <li class="nav-item">
            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
          </li>
          @if (Route::has('register'))
          <li class="nav-item">
            <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
          </li>
          @endif
          @else
          <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" v-pre>
              {{ Auth::user()->name }}
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="{{ route('admin.home') }}">Home</a>
              <a class="dropdown-item" href="{{ url('profile') }}">{{ __('Profile') }}</a>
              <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                           document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
              </a>

              <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
              </form>
            </div>
          </li>
          @endguest
          </ul> -->
        </div>
      </div>
    </nav>

  </header>
</template>

<style scoped lang="scss">
@use '../scss/vars' as *;

#layout-nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  background-color: $black;

  .navbar-brand {
    height: 150px;
    margin-right: 40px;
    text-align: center;
    position: relative;

    .logo {
      max-height: 100%;
      object-fit: center;
      border-radius: 50%;
    }

    h4 {
      font-size: 14px;
      position: absolute;
      bottom: 27px;
      left: 50%;
      transform: translateX(-50%);
      color: black;
    }
  }

  .social {
    margin-right: 30px;

    a {
      color: white;
      font-size: 1.4rem;
    }
  }
}
</style>