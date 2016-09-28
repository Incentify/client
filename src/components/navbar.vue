<template>
<div class="btn-group btn-group-block">
      <a class="btn btn-padding" href="#" v-link="{path:'dashboard'}"><i class="fa fa-tachometer" style="font-size: 30px;" aria-hidden="true"></i><br>Dashboard</a>
      <a class="btn btn-padding" href="#" v-link="{path:'profile'}"><i class="fa fa-user" style="font-size: 30px;" aria-hidden="true"></i><br>Profile</a>
      <a class="btn btn-padding" href="#" v-link="{path:'settings'}"><i class="fa fa-cog" style="font-size: 30px;" aria-hidden="true"></i><br>Settings</a>
      <a class="btn btn-padding" href="#" v-link="{path:'goal'}"><i class="fa fa-plus" style="font-size: 30px;" aria-hidden="true"></i><br>Add Goal</a>
</div>
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
