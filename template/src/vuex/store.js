import Vue from 'vue'
import Vuex from 'vuex'
import  indexModule from './index/module'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        indexModule
    }
})
