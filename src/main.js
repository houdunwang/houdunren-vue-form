import Vue from 'vue'
import App from './App.vue'
import HdVueForm from './index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(HdVueForm,{url:''})
new Vue({
  el: '#app',
  render: h => h(App)
});
