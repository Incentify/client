<template>
  <div>
    <img class="logo" src="../assets/incentify-logo-square_360.png">
    <div class="notification is-success animated fadeIn" v-show="success">
      <button class="delete" @click="success = !success"></button>
        Success! Redirecting to the app...
    </div>

    <div class="notification is-danger animated fadeIn" v-show="failure">
      <button class="delete" @click="failure = !failure"></button>
        Either your Email address is already taken or your passwords did not match.
    </div>



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
  </div>
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
      success: false,
      failure: false,
    };
  },
  methods: {
    registerUser() {
      this.$http.post('http://localhost:3000/auth/register', this.login).then((response) => {
        // success callback
        console.log(response);
        const that = this;
        this.success = !this.success;
        setTimeout(() => {
          that.$router.go('/goal');
        }, 2000);
      }, (response) => {
        // error callback
        console.log(response);
        this.failure = !this.failure;
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