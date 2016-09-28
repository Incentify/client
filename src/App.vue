<template>
  <div id="app">
    <!-- route outlet -->
    <router-view></router-view>
    <navbar v-show="intro"></navbar>
  </div>
</template>

<script>
  import navbar from './components/navbar';

  export default {
    components: {
      navbar,
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
