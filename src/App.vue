<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
};
</script>

<style lang="sass">
  @import "./sass/_mixins.sass"
  @import "./sass/_variables.sass"
  @import "./sass/_base.sass"
  @import "./sass/_data.sass"
  @import "./sass/_footer.sass"
  @import "./sass/_header.sass"
  @import "./sass/_logo.sass"
</style>
