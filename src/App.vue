<template>
  <div id="app">
    <!-- route outlet -->
    <top-branding class="header"></top-branding>
    <router-view></router-view>
    <navbar class="navbar"></navbar>
  </div>
</template>

<script>
  import navbar from './components/navbar';
  import topBranding from './components/top-branding';
  import Vue from 'vue';
  import auth from './auth/index.js';

  require('bulma/bulma.sass');
  require('animate.css/animate.css');
  require('!style!css!sass!font-awesome/scss/font-awesome.scss');

  export default {
    components: {
      navbar,
      topBranding,
    },
    replace: false,
    ready() {
      Vue.http.interceptors.push((request, next) => {
          var token = auth.getToken()
          if(token && !request.headers.has("authorization")){
            console.log(request.headers)
            request.headers.append("authorization", "JWT " + token);
          }
        next();
      });
    }
  };
</script>

<style>

  .header{
    margin-bottom: 4rem;
  }

  .navbar {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  /* this makes the sticky headers/footers without covering up the content */
  #app{
    margin-top: 5rem;
    margin-bottom: 3.5rem;
  }
</style>
