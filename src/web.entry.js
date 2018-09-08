import Vue from 'vue';
import App from './components/App.vue';
import './style.scss';

import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Kuala_Lumpur');
Object.defineProperty(Vue.prototype, '$moment', {get() { return this.$root.moment }})

import Vuex from 'vuex';
Vue.use(Vuex);

new Vue({
  el: '#app',
  data: {
    moment,    
  },
  components: {
    App
  },
  store: {
    state: {
      currentYear: 2018,
      currentMonth: 9  
    }
  }
});
