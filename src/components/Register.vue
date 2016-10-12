<template>
  <img class="logo" src="../assets/incentify-logo-square_360.png">

  <div class="level is-mobile">
    <a class="button btn-padding level-item is-medium">
      <span class="icon"><i class="fa fa-facebook"></i></span> <span>Facebook</span>
    </a>
    <a class="button btn-padding level-item is-medium">
      <span class="icon"><i class="fa fa-envelope"></i></span> <span>Email</span>
    </a>
    <a class="button btn-padding level-item is-medium">
      <span class="icon"><i class="fa fa-twitter"></i></span> <span>Twitter</span>
    </a>
  </div>

  <label for="">email</label>
  <input type="text" class="input">

  <label for="">enter a password</label>
  <input type="password" class="input">

  <label for="">confirm password</label>
  <input type="password" class="input">
  <button class="button" @click="">Login</button>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    /* height:100vh; */
    width: 100%;
    /* background:ghostwhite; */
    /* position: absolute; */
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
    margin-bottom: 10%;
    border:none;
    border-radius: 100%;
    width:  50%;
  }

</style>