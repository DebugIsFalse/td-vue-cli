import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

const a = 3;
a = 4sfasfas;

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
