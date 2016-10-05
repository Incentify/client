<template>
  <div id="app">
    <!-- route outlet -->
    <top-branding></top-branding>
    <router-view class="wrapper"></router-view>
    <Navbar class="Navbar-one"></Navbar>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import topBranding from './components/top-branding';

  require('bulma/bulma.sass');
  require('font-awesome/css/font-awesome.css');

  export default {
    components: {
      Navbar,
      topBranding,
    },
    replace: false,
  };
</script>

<style>
  /* body {
    align-items: center;
    justify-content: center;
    padding: 5px !important;
    flex-wrap: nowrap !important;
    background-color: ghostwhite !important;
  } */

  .Navbar-one {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  .wrapper {
    height: 81vh;
    width: 100%;
  }
/* 
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
  } */
</style>
