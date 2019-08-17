<template>
  <header class="header"  >
    <div class="header__top">
      <router-link to="/">
        <logo></logo>
      </router-link>
      <nav>
        <ul>
          <router-link to="/"
             tag="li"
             >
          Menu
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

