<template>
	<div class="box box-slim">
      <a class="btn top-padding red-nav" href="#" v-link="{path:'dashboard'}"><img class="logo-size" src="../assets/incentify-logo-rectangle.png"></a>
  </div>
</template>

<script>
export default {

  name: 'component_name',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
  .top-padding {
    /* padding: 10px !important; */
    /* font-size: 20px !important; */
    text-transform: uppercase !important;
    /* height: 120px !important; */
  }

  .logo-size{
    width: 12rem;
  }

  .box-slim{
    padding: 1%;
  }
</style>