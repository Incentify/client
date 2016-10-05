<template>

<div class="content">
  <div class="">
    <div class="has-text-right page-title">Profile Settings</div>
  </div>

  <div class="control card is-fullwidth">
    <div class="card-content">
      <label class="label"><h2 class="is-large title">name</h2></label>
      <input class="input" type="text" :disabled="formDisabled">

      <label class="label"><h2 class="">username</h2></label>
      <input class="input" type="text" :disabled="formDisabled">

      <label class="label"><h2 class="">password</h2></label>
      <input class="input" type="password" :disabled="formDisabled">

      <label class="label"><h2 class="">confirm password</h2></label>
      <input class="input" type="password" :disabled="formDisabled">

      <label class="label"><h2 class="">age</h2></label>
      <input class="input" type="text" :disabled="formDisabled">
      <button class="button is-large red-nav" @click = "editProfile" v-show="formDisabled">Edit</button>
      <button class="button is-large red-nav" @click = "submitProfile" v-show="!formDisabled">Save</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      formDisabled: true,
    };
  },
  methods: {
    editProfile() {
      this.formDisabled = !this.formDisabled;
    },
    submitProfile() {
      // vue-resource POST of new user data
      this.formDisabled = !this.formDisabled;
    },
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