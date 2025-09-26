import Vue from 'vue'
import test from 'rspack-lib'

import './style.css';
import App from './App.vue';

console.log(test);

Vue.use(test)

new Vue({
    el:'#app',
    render(h) {
        return h(App);
      },
})