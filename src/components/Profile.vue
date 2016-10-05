<template>

<div class="content">
  <div class="">
    <div class="has-text-right page-title">Profile Settings</div>
  </div>

  <div class="control box profileForm">
    <label class="label"><h1 class="is-large title">name</h1></label>
    <input placeholder="Ryan Wilson" class="input is-large" type="text" disabled>

    <label class="label"><h1 class="is-large title">username</h1></label>
    <input placeholder="comrww" class="input is-large" type="text" disabled>

    <label class="label"><h1 class="is-large title">password</h1></label>
    <input placeholder="••••••" class="input is-large" type="password" disabled>

    <label class="label"><h1 class="is-large title">confirm password</h1></label>
    <input placeholder="••••••" class="input is-large" type="password" disabled>

    <label class="label"><h1 class="is-large title">age</h1></label>
    <input placeholder="25" class="input is-large" type="text" disabled>
    <button class="button red-nav edit-btn">Edit</button>
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

  .profileForm{
    font-size: 2rem;
  }

	.edit-btn {
    padding: .8rem;
    font-size: 1.25rem;
    text-transform: uppercase;
    height: 7rem;
    width: 14rem;
    font-size: 2.5rem;
	}

	.btn-padding {
		padding-bottom: 1rem;
	}

	.page-title {
		font-size: 3rem;
		color: #587272;
	}
</style>