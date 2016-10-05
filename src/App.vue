<template>
  <div id="app">
    <!-- route outlet -->
    <top-branding></top-branding>
    <router-view class="wrapper"></router-view>
    <navbar class="navbar-one"></navbar>
  </div>
</template>

<script>
  import navbar from './components/navbar';
  import topBranding from './components/top-branding';

  require('bulma/bulma.sass');
  require('font-awesome/css/font-awesome.css');
  require('animate.css/animate.css');

  export default {
    components: {
      navbar,
      topBranding,
    },
    replace: false,
  };
</script>

<style>

  .navbar-one {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  .wrapper {
    height: 81vh;
    width: 100%;
  }
/*

  .red-nav {
    color: red !important;
    border-color: red !important;
    background-color: white !important;
  }

  .red-nav:hover {
    background-color: black !important;
    color: white !important;
    border-color: red !important;
    background-color: white;
  }

  .red-nav:focus {
    background-color: black !important;
    color: white !important;
    border-color: red !important;
    background-color: white;
  }

  .red-nav:active {
    background-color: black !important;
    color: white !important;
    border-color: white !important;
    background-color: white;
  }

  .lil-marg {
    margin-right: 25px !important;
  } */
</style>
