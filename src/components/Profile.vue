<template>
	
<div style="font-size: 50px;">
<div class="columns is-mobile">
  		<div class="column is-4 is-offset-8" style="font-size: 40px; color: #587272;">Profile Settings</div>
	</div>
<div class="card is-fullwidth">
	  <div class="card-content">
	    <div class="content">
		<form action="" class="form-horizontal b-pad">
	    	<label class="label super-mario" for="">name</label>
	    	<input placeholder="Ryan Wilson" class="input super-mario h-fix"type="text" disabled>
	    	<br>
	    	<label class="label super-mario" for="">username</label>
	    	<input placeholder="comrww" class="input super-mario h-fix"type="text" disabled>
	    	<br>
	    	<label class="label super-mario"for="">password</label>
	    	<input placeholder="Thelion1" class="input super-mario h-fix"type="password" disabled>
			<br>
			<label class="label super-mario"for="">age</label>
	    	<input placeholder="25" class="input super-mario h-fix"type="text" disabled>
	    	<br><br>
	    	<button class="button red-nav btn-on-profile">Edit</button>
	    </form>   
	    </div>
	  </div>
	</div>
	</div>
</template>

<script>
export default {

  // name: 'component_name',

  data() {
    return {

    };
  },
};
</script>
	
<style lang="css" scoped>
	.super-mario {
		font-size: 40px !important;
		line-height: 200%;
	}

	.btn-on-profile {
	    padding: 10px !important;
	    font-size: 20px !important;
	    text-transform: uppercase !important;
	    height: 100px !important;
	    width: 200px !important;
	    font-size: 30px !important;
  	}
	.some-padding-profile {
		padding-top: 50px;
	}

	.h-fix {
		height: 100px !important;
	}

	.b-pad {
		padding-bottom: 15px;
	}
</style>