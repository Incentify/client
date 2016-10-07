<template>
  <div id="app">
    <!-- route outlet -->
    <top-branding class="nav"></top-branding>
    <router-view class="wrapper"></router-view>
    <navbar class="navbar-one"></navbar>
  </div>
</template>

<script>
  import navbar from './components/navbar';
  import topBranding from './components/top-branding';

  require('bulma/bulma.sass');
  require('animate.css/animate.css');
  require('font-awesome/css/font-awesome.css');

  export default {
    components: {
      navbar,
      topBranding,
    },
    replace: false,
  };
</script>

<style>

  .nav{
    margin-bottom: 4rem;
  }

  .navbar-one {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  .wrapper {
    height: 81vh;
    width: 100%;
  }

  /* attempt to make sticky headers/footers */
  #app{
    margin-top: 5rem;
    margin-bottom: 3.5rem;
  }
</style>
