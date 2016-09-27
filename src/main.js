import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Hello from './components/Hello.vue';
import Login from './components/Login.vue';
Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/': {
    component: Hello,
  },
  '/login': {
    component: Login,
  },
});

router.start(App, 'body');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
