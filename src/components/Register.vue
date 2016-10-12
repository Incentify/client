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
  <input type="email" class="input" v-model="login.email">

  <label for="">enter a password</label>
  <input type="password" class="input" v-model="login.password">

  <label for="">confirm password</label>
  <input type="password" class="input" v-model="login.confirmPassword">
  <button class="button" @click="registerUser()">Register</button>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    registerUser() {
      this.$http.post('http://localhost:3000/auth/register', this.login).then((response) => {
        // success callback
        console.log(response.status);
        console.log(response.statusText);
      }, (response) => {
        // error callback
        console.log(response.status);
        console.log(response.statusText);
      });
    },
  },
};
</script>

<style scoped>
  .wrapper {
    width: 100%;
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