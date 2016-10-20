<template>
<div  class="register-bg">
  <img src="../assets/incentify.logo.png" class="logo">
  <div class="notification is-success animated fadeIn" v-show="success">
    <button class="delete" @click="success = !success"></button>
      Success! Redirecting to the app...
  </div>

<!-- failure toast -->
  <div class="notification is-danger animated fadeIn" v-show="failure">
    <button class="delete" @click="failure = !failure"></button>
      Either your Email address is already taken or your passwords did not match.
  </div>

  <div class="level is-mobile">
    <!-- <a class="button btn-padding level-item is-medium">
      <span class="icon"><i class="fa fa-facebook"></i></span> <span>Facebook</span>
    </a> -->
    <a class="button btn-padding level-item is-medium squaredCorners">
      <span class="icon"><i class="fa fa-envelope"></i></span> <span>Enter Your Email</span>
    </a>
    <!-- <a class="button btn-padding level-item is-medium">
      <span class="icon"><i class="fa fa-twitter"></i></span> <span>Twitter</span>
    </a> -->
  </div>

  <div class="formMargin">
    <label for="" class="labelMargin"><strong>Email</strong></label>
    <input type="email" class="input inputMargin" v-model="login.email">

    <label for="" class="labelMargin"><strong>Enter a password</strong></label>
    <input type="password" class="input inputMargin" v-model="login.password">

    <label for="" class="labelMargin"><strong>Confirm password</strong></label>
    <input type="password" class="input inputMargin" v-model="login.confirmPassword">
    <button class="button is-medium reg-btn" @click="registerUser()">Register</button>
  </div>
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
        // server sends back JWT, we put it in localStorage
        localStorage.setItem('token', response.body.token)

        // success callback
        this.success = !this.success;
        //binding this to use inside of setTimeout
        const that = this;

        //2 second timer before redirect
        setTimeout(() => {
          that.$router.go('/goal');
        }, 1600);
      }, (response) => {
        // error callback
        this.failure = !this.failure;
       //binding this to use inside of setTimeout
        const that = this;

        //2 second timer before redirect
        setTimeout(() => {
           this.failure = !this.failure;
        }, 1800);

      });
    },
  },
};
</script>

<style scoped>
  .reg-btn {
    margin-top: 1rem;
    border-radius: 1rem;
  }

  .squaredCorners{
    border-radius: 0px;
  }

  .labelMargin{
    margin-left: .5rem;
  }

  .inputMargin{
    margin-bottom: .5rem;
  }

  .formMargin{
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .wrapper {
    width: 100%;
  }


  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 25%;
    margin-bottom: 25%;
    border:none;
    width:  80%;

  }
  .register-bg {
    /* background: #61cbec; */
    height: 100vh;

    background: linear-gradient(181deg, #a1d7f3, #038ad2);
    background-size: 400% 400%;
    animation: gradientThing 7s ease infinite;
  }

  @keyframes gradientThing {
    0%{background-position:48% 0%}
    50%{background-position:53% 100%}
    100%{background-position:48% 0%}
  }
</style>