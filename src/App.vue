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
</style>
