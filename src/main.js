// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

/* Import modules. */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

/* Import app. */
import App from './App'

/* Import router. */
import router from './router'

/* Import store. */
import store from './store'

/* Initialize Boostrap Vue. */
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
