import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render:h=>h(App),
  router
}).$mount('#app')
// createApp(App).use(store).use(router).mount('#app')
