// 列表

import Vue from 'vue';
require('../filter/status-desc');
import store from '../store/store'
import App from './app';

// var VueValidator = require('vue-validator')
// Vue.use(VueValidator);

$(function () {
  new Vue({
    store, // inject store to all children
    el: '#app',
    components: {
      App
    }
  });
})
