import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import VueParticles from 'vue-particles'
import VueTyperPlugin from 'vue-typer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas }  from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueParticles)
Vue.use(VueTyperPlugin)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
