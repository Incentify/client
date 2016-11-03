<template>
  <div id="app" v-bind:class="{ 'no-margin': $route.path === '/' }">
    <!-- route outlet -->
    <top-branding class="header" v-show="$route.path !== '/'" ></top-branding>
      <router-view></router-view>
      <navbar class="navbar" v-show="$route.path !== '/'"></navbar>
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
            request.headers.append("authorization", "JWT " + token);
          }
        next();
      });
    }
  };
</script>

<style>
body{
  font-size: calc(1em + 1vw);
}
  .no-margin {
    margin: 0 !important;
  }

  .header{
    margin-bottom: 4rem;
    z-index: 10;
  }

  .navbar {
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 10;
    background-color:  ghostwhite;
  }

  /* this makes the sticky headers/footers without covering up the content */
  #app{
    margin-top: 9rem;
    margin-bottom: 3.5rem;
  }

    .is-success {
    background-color: #00856d;
  }

    .is-primary {
    background-color: #61cbec;
  }


</style>
