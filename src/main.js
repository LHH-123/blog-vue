import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from './router/router.js'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import './assets/index.css'

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueQuillEditor);
Vue.config.devtools = true;



new Vue({
  el: '#app',
  router: VueRouter,
  render: h => h(App)
})
