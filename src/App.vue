<template>
  <div id="app">
    <!-- route outlet -->
    <header></header>
    <router-view></router-view>
    <navbar v-show="intro"></navbar>
  </div>
</template>

<script>
  import navbar from './components/navbar';
  import header from './components/header';
  require('spectre.css/dist/spectre.css');

  export default {
    components: {
      navbar,
      header,
    },
    replace: false,
  };
</script>

<style>
  html {
    height: 100%;
    background-color: ghostwhite;
  }

  body {
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
