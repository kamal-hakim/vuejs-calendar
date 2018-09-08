import Vue from 'vue';
import App from './components/App.vue';
import './style.scss';

import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Kuala_Lumpur');
Object.defineProperty(Vue.prototype, '$moment', {get() { return this.$root.moment }})

new Vue({
  el: '#app',
  data: {
    moment,    
  },
  components: {
    App
  },
});
