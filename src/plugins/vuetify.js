import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken1, // #E53935
    secondary: colors.green.lighten4, // #FFCDD2
    warning: '#FFF' // #3F51B5
  },
  // iconfont: 'fa'
})

