<template>
	<nav class="box box-slim stickyHeader">
      <a class="" href="#"><img class="logo-size" src="../assets/incentify-logo-rectangle.png"></a>
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
  }

  .logo-size{
    width: 12rem;
  }

  .box-slim{
    padding: 1%;
  }
</style>