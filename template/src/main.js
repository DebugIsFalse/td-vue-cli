import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'

Vue.config.productionTip = false





import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
