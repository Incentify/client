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

  // require('spectre.css/dist/spectre.css');
  // require('bulma/css/bulma.css');
  require('bulma/bulma.sass');
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
.navbar-one {
  position: fixed; 
  bottom: 0px; 
  width: 100%;
}

  body {
    align-items: center;
    justify-content: center;
    padding: 5px !important;
    flex-wrap: nowrap !important;
    background-color: ghostwhite !important;
  }

  .wrapper {
    height: 81vh !important;
    width: 100% !important;
  }

  .btn-padding {
    padding: 10px !important;
    font-size: 20px !important;
    text-transform: uppercase !important;
    height: 150px !important;
  }

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
  }
</style>
