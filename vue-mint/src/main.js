// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Navbar, TabItem } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Spinner } from 'mint-ui';
import './assets/css/reset.scss';

Vue.use(InfiniteScroll);
Vue.component(Spinner.name, Spinner);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
