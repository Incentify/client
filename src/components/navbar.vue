<template>
  <button><a href="#" v-link="{path:'dashboard'}">Dashboard</a></button>
  <button><a href="#" v-link="{path:'profile'}">Profile</a></button>
  <button><a href="#" v-link="{path:'settings'}">Settings</a></button>
  <button><a href="#" v-link="{path:'goal'}">Add Goal</a></button>
</template>

<script>
  export default {
    // components: {
    // }
  };
</script>

<style scoped>
    button {
        /* position: absolute; */
        /* bottom: 0; */
        /* width:  25%; */
    }
</style>
