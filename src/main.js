import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// routes
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import Settings from './components/Settings.vue';
import Dashboard from './components/Dashboard.vue';
import Goal from './components/Goal.vue';

// instantiate vue-router
Vue.use(VueRouter);
const router = new VueRouter();

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
