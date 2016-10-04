<template>

  <footer class="card-footer" style="padding: 0;">
           <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'dashboard'}"><i class="fa fa-tachometer" style="font-size: 60px;" aria-hidden="true"></i></a>
            <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'profile'}"><i class="fa fa-user" style="font-size: 60px;" aria-hidden="true"></i></a>
            <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'settings'}"><i class="fa fa-cog" style="font-size: 60px;" aria-hidden="true"></i></a>
            <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'goal'}"><i class="fa fa-plus" style="font-size: 60px;" aria-hidden="true"></i></a>
  </footer>

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
