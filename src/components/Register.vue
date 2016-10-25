<template>
  <link href="https://fonts.googleapis.com/css?family=Shrikhand" rel="stylesheet">
  <div  class="register-bg">
    <img src="../assets/incentify.logo.png" class="logo">
    <div class="slogan-container">
      <h1 class="slogan"><b>Together we can reach your goals</b></h1>
    </div>
    <div class="notification is-success animated fadeIn " v-show="success">
      <button class="delete" @click="success = !success"></button>
        Success! Redirecting to the app...
    </div>

  <!-- failure toast -->
    <div class="notification is-danger animated fadeIn" v-show="failure">
      <button class="delete" @click="failure = !failure"></button>
        Either your Email address is already taken or your passwords did not match.
    </div>

    <div class="level is-mobile">

    </div>
   <!--  Login to an account form -->
    <div class = "formMargin" v-show="showRegister">
      <h1 class="sign-up">-SIGN UP-</h1>
      <p class="control has-icon fm-bottom">
        <input class="input" type="email" placeholder="Email" v-model="login.email">
        <i class="fa fa-envelope"></i>
      </p>
      <p class="control has-icon fm-bottom">
        <input class="input" type="password" placeholder="Password"  v-model="login.password">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control">
        <button class="button is-primary is-fullwidth"@click="loginUser()">
          Login
        </button>
      </p>
    </div>

    <!-- Register an account form -->
    <div class = "formMargin" v-show="!showRegister">
      <h1 class="sign-up">-REGISTER-</h1>
      <p class="control has-icon fm-bottom">
        <input class="input" type="email" placeholder="Email" v-model="register.email">
        <i class="fa fa-envelope"></i>
      </p>
      <p class="control has-icon fm-bottom">
        <input class="input" type="password" placeholder="Password"  v-model="register.password">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control has-icon fm-bottom">
        <input class="input" type="password" placeholder="Confirm Password" v-model="register.confirmPassword" >
        <i class="fa fa-lock"></i>
      </p>
      <p class="control">
        <button class="button is-primary is-fullwidth" @click="registerUser()" >
          Sign Up!
        </button>
      </p>
    </div>

      <a class="userType" @click="showRegister = !showRegister" v-show="showRegister">New user? Sign up here!</a>
      <a class="userType" v-show="!showRegister" @click="showRegister = !showRegister">Already a User? Login!</a>

    <footer>By registering I accept the <br><b>Terms Of Service</b> and <b>Privacy Policy.</b>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      register: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      login: {
        email: '',
        password: '',
      },

      success: false,
      failure: false,
      showRegister: true,
    };
  },
  methods: {

    registerUser() {
      this.$http.post(process.env.API_URL + '/auth/register', this.register).then((response) => {
        // server sends back JWT, we put it in localStorage
        localStorage.setItem('token', response.body.token)

        // success callback
        this.success = !this.success;
        //binding this to use inside of setTimeout
        const that = this;

        //2 second timer before redirect
        setTimeout(() => {
          that.$router.go('/goal');
        }, 2200);
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
    loginUser() {
        this.$http.post(process.env.API_URL + '/auth/login', this.login).then((response) => {
          // server sends back JWT, we put it in localStorage

          localStorage.setItem('token', response.body.token)

          // success callback
          this.success = !this.success;
          //binding this to use inside of setTimeout
          const that = this;

          //2 second timer before redirect
          setTimeout(() => {
            that.$router.go('/goal');
          }, 2200);
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

  .sign-up {
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 18px;
    font-family: 'Shrikhand', cursive;
  }
  .userType {
    text-align: center;
    color: #fff;
    font-size: 18px;
    padding-left: 5.9rem;
  }
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
    padding-top: 15%;
    margin-bottom:;
    border:none;
    width:  85%;
    

  }
     .register-bg {
      background: #61cbec; 
      height: 100vh;
      background-size: 200% 200%;
      animation: gradientThing 10s linear infinite;
      animation-iteration-count: 1;
      opacity: 1.0;
     /*Lighter Mountain commented below*/
      background-image: url('../assets/mountain.png');
      background-position: 50% 0%;
    }

    @keyframes gradientThing { 
      0%{background-position:50% 100%}
      50%{background-position:50% 50%}
      100%{background-position:50% 0%}
    }

  .fm-bottom {
    margin-bottom: 1.5rem;
  }

  .slogan {
    color: #fff;
    text-align: center;
    font-size: 12px;
    margin-bottom: 5.1rem;
    display:inline-block;
    padding: 6px;

  }

  .slogan-container {
    text-align: center;
  }

  footer {
    color: #fff;
    text-align: center;
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

</style>