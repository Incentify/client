<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <a v-link="{ path: '/' }"><button>Home</button></a>
    <a v-link="{ path: '/login' }"><button>Login</button></a>
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  components: {
    Hello,
  },
  replace: false,
};
</script>

<style>
html {
  height: 100%;
}

p{
  font-size: 1em;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
