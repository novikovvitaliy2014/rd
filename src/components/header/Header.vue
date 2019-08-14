<template>
  <header class="header"  >
    <div class="header__top">
      <router-link to="/">
        <logo></logo>
      </router-link>
      <nav>
        <ul>
          <router-link to="/users"
             tag="li"
             >
          Users
          </router-link>
          <router-link to="/"
             tag="li"
             >
          Courses
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  }
};
</script>

