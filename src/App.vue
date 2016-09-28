<template>
  <div id="app">
    <!-- route outlet -->
    <top-branding></top-branding>
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>

<script>
  import navbar from './components/navbar';
  import topBranding from './components/top-branding';

  require('spectre.css/dist/spectre.css');
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
  body {
    align-items: center;
    justify-content: center;
    padding: 5px !important;
    flex-wrap: nowrap !important;
  }

  .btn-padding {
    padding: 10px !important;
    font-size: 10px !important;
    text-transform: uppercase !important;
    height: 60px !important;
  }
</style>
