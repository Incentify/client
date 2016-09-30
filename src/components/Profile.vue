<template>
	<div class="">
	<br>
	    <div class="card">
	    	<div class="card-header">
	        	<h4 class="card-title"></h4>
	        	<h6 class="card-meta"></h6>
	    </div>
	    <div class="card-body">
			<div class="form-group">
			    <br>
			    <form action="" class="form-horizontal">
			    	<label class="form-label super-mario" for="">name</label>
			    	<input class="form-label super-mario"type="text">
			    	<br>
			    	<label class="form-label super-mario" for="">username</label>
			    	<input class="form-label super-mario"type="text">
			    	<label class="form-label super-mario"for="">password</label>
			    	<input class="form-label super-mario"type="text">
					<br>
					<label class="form-label super-mario"for="">age</label>
			    	<input class="form-label super-mario"type="text">
			    	<br>

			    </form>    
			</div>
		    <div class="card-footer">
		        <button class="btn btn-primary btn-on-profile red-nav">Edit</button>
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
  	}
	.some-padding-profile {
		padding-top: 50px;
	}
</style>