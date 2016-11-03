<!-- scriptless component, could be refactored into App.vue -->
<template>
	<nav class="box box-slim stickyHeader">
      <a class="" href="#"><img class="logo-size" src="../assets/incentify.logo.png"></a>
  </nav>
</template>

<script>
export default {

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>

  /* sticky header hack */
  .stickyHeader{
    position: fixed;
    top: 0;
    width:  100%;
    border-radius: 0px;
    background-color: #61cbec; 
  }

  .logo-size{
    margin:0 auto;

  }

  .box-slim{
    padding: 1%;
    padding: 1rem;
  }
</style>