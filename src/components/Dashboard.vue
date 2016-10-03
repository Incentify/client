<template>
<div style="font-size: 50px;">
	<div class="is-mobile lil-marg">
  		<div class="has-text-right" style="font-size: 40px; color: #587272;">Dashboard</div>
	</div>
	<div class="card is-fullwidth margin-dash animate">
	  <div class="card-content">
	    <div class="content">
	      <strong>Goal Name</strong>
	      username with GoalProvider
	      <progress class="progress is-small is-success" value="15" max="100">15%</progress>
	      percentage of goal completion%
	    </div>
	  </div>
	</div>
	<div class="card is-fullwidth margin-dash animate">
	  <div class="card-content">
	    <div class="content">
	      <strong>Treehouse</strong>
	      comrww
	      <img src="../assets/treehouse-logo.png" class="is-pulled-right" style="height: 50px; width: 50px;">
	      <progress class="progress is-small is-success" value="45" max="100">45%</progress>
	      45%
	    </div>
	  </div>
	</div>
	<div class="card is-fullwidth margin-dash animate">
	  <div class="card-content">
	    <div class="content">
	      <strong>DuoLingo</strong>
	      comrww
	      <progress class="progress is-small is-success" value="5" max="100">5%</progress>
	      5%
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
.margin-dash {
	margin-top: 15px;
}
</style>