<template>
<div>
  <div class="content">
    <div class="">
      <div class="has-text-right page-title">Profile Settings</div>
    </div>

    <div class="control card is-fullwidth">
      <div class="card-content">

        <label class="label"><h2 class="">Email</h2></label>
        <input class="input" type="email" :disabled="formDisabled" v-model="profile.email" placeholder="{{profileData.email}}">

        <label class="label"><h2 class="">password</h2></label>
        <input class="input" type="password" :disabled="formDisabled" placeholder="••••" v-model="data.password">

        <label class="label"><h2 class="">confirm password</h2></label>
        <input class="input" type="password" :disabled="formDisabled" placeholder="••••" v-model="data.confirmPassword">

        <button class="button is-large red-nav" @click = "editProfile" v-show="formDisabled">Edit</button>
        <button class="button is-large red-nav" @click = "submitProfile" v-show="!formDisabled">Save</button>
      </div>
    </div>
  </div>

  <button @click="logout()" class="button is-danger is-fullwidth">Logout</button>

  <!-- success toast -->
  <div class="notification is-success animated fadeIn" v-show="success">
    <button class="delete" @click="success = !success"></button>
      Success! Your profile has been updated.
  </div>

  <!-- failure toast -->
  <div class="notification is-danger animated fadeIn" v-show="failure">
    <button class="delete" @click="failure = !failure"></button>
      Error! Double check your password. That email may be taken. Try again.
  </div>

</div>
</template>

<script>

export default {
  data() {
    return {
      formDisabled: true,
      profile: {
        email: '',
        password: '',
        confirmPassword: null,
      },
      profileData: {
        email: '',
      },
      success: false,
      failure: false,
    };
  },
  methods: {
    submitProfile() {
      // vue-resource POST of new user data
      this.$http.put(process.env.API_URL + '/users', this.profile).then((response) => {
        // success callback
        this.formDisabled = !this.formDisabled;
        this.success = !this.success;
      }, (response) => {
        // error callback
        this.failure = !this.failure;
      });
    },
      logout() {
        var that = this;
        this.$swal({
          title: 'Logout',
          text: "Are you sure you want to logout?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Logout'
      }).then(function() {
        // swal(
        //   function() {
          // 'Deleted!',
          // 'Your file has been deleted.',
          // 'success',
          localStorage.removeItem('token')
          that.$router.go('/');
        // }
        // )
      })
     },
  },
  created() {
    this.$http.get(process.env.API_URL + '/users').then((response) => {
      // success callback
      console.log(response);
      this.profileData.email = response.body[0].email;
    }, (response) => {
      // error callback
      this.failure = !this.failure;
    });
  },
};
</script>

<style lang="css" scoped>

  .input{
    margin-bottom: 2%;
  }

	.page-title {
		font-size: 1.8rem;
		color: #587272;
    margin-right: 2%;
    padding-bottom: 2%;
	}
</style>