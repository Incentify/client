<template>

  <footer class="card-footer">
    <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'dashboard'}"><i class="fa fa-tachometer navbar-font-size" aria-hidden="true"></i></a>
    <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'profile'}"><i class="fa fa-user navbar-font-size" aria-hidden="true"></i></a>
    <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'settings'}"><i class="fa fa-cog navbar-font-size" aria-hidden="true"></i></a>
    <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'goal'}"><i class="fa fa-plus navbar-font-size" aria-hidden="true"></i></a>
  </footer>

</template>

<script>
  export default {
    // components: {
    // }
  };
</script>

<style scoped>
.remove-all-padding {
  padding: 0;
}
.navbar-font-size {
  font-size: 60px;
}
</style>
