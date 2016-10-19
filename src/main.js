import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import FastClick from 'fastclick';
// import Interceptor from './auth/interceptor.js';

// routes
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import Settings from './components/Settings.vue';
import Dashboard from './components/Dashboard.vue';
import Goal from './components/Goal.vue';

// global HTTP header interception
// Interceptor.init();

// instantiate vue-resource
Vue.use(VueResource);

// instantiate vue-router
Vue.use(VueRouter);
const router = new VueRouter();

// get rid of 300ms tap delay
FastClick.attach(document.body);

router.map({
  '/': {
    component: Register,
  },
  '/register': {
    component: Register,
  },
  '/profile': {
    component: Profile,
  },
  '/settings': {
    component: Settings,
  },
  '/dashboard': {
    component: Dashboard,
  },
  '/goal': {
    component: Goal,
  },
});

router.start(App, 'body');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
