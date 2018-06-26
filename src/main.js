import Vue from 'vue'
import App from './App.vue'
import Index from './index'
Vue.use(Index);
new Vue({
  el: '#app',
  render: h => h(App)
});
