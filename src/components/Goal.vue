<template>
	<div style="font-size: 50px;">
  		<div class="is-mobile lil-marg">
  			<div class="has-text-right" style="font-size: 40px; color: #587272;">New Goal</div>
		</div>
  		<div class="card is-fullwidth margin-goal">
    		<div class="card-content">
      			<div class="content">
       				<div v-on:click = "showTreehouseInfo = !showTreehouseInfo" v-show = "showTreehouseInfo"><strong>Treehouse</strong><i class="fa fa-plus is-pulled-right" style="font-size: 60px;" aria-hidden="true"></i></div>
         			<div v-on:click = "showTreehouseInfo = !showTreehouseInfo" v-show = "!showTreehouseInfo"><strong>Treehouse</strong><i class="fa fa-minus is-pulled-right" style="font-size: 60px;" aria-hidden="true"></i></div>
        		<div v-show = "!showTreehouseInfo">
        			<p>Treehouse brings affordable technology education to people everywhere in order to help them achieve their dreams and change the world.</p>
      				<p class="control has-addons">
	        			<a class="button red-inverse-nav btn-on-goal" style="width: 300px !important;">
	          				<span class="icon is-small"></span>
	          				<span><strong>incentive</strong></span></a>
				        <a class="button red-nav btn-on-goal">
				          <span>$5</span>
				        </a>
				        <a class="button red-nav btn-on-goal">
				          <span>$25</span>
				        </a>
				        <a class="button red-nav btn-on-goal">
				          <span>$50</span>
				        </a>
				        <a class="button red-nav btn-on-goal" style="width: 300px !important;">
				          <span>other</span>
				        </a>
					</p>
      				<p class="control has-addons has-addons-centered">
        				<span>
        					<span class="btn-on-goal super-mario" style="color: red !important; text-align: center !important; width: 100px !important;">$</span>
        				</span>
        				<input class="input h-fix super-mario" type="text" placeholder="Amount of money">
        				<a class="button is-primary red-nav btn-on-goal" style="border: 5px; border-color: red !important;">
          					<strong>set goal</strong>
        				</a>
      				</p>
    			</div>
    			</div>
  			</div>
  		</div>
  	
  	<div class="card is-fullwidth margin-goal">
	    <div class="card-content">
	      <div class="content">
	         <div v-on:click = "showDuoLingoInfo = !showDuoLingoInfo" v-show = "showDuoLingoInfo"><strong>DuoLingo</strong><i class="fa fa-plus is-pulled-right" style="font-size: 60px;" aria-hidden="true"></i></div>
	         <div v-on:click = "showDuoLingoInfo = !showDuoLingoInfo" v-show = "!showDuoLingoInfo"><strong>DuoLingo</strong><i class="fa fa-minus is-pulled-right" style="font-size: 60px;" aria-hidden="true"></i></div>
	        <div v-show = "!showDuoLingoInfo">
	        <p>Learning with Duolingo is fun and addictive. Earn points for correct answers, race against the clock, and level up. Our bite-sized lessons are effective, and we have proof that it works.</p>
	        <p class="control has-addons">
	        			<a class="button red-inverse-nav btn-on-goal" style="width: 300px !important;">
	          				<span class="icon is-small"></span>
	          				<span><strong>incentive</strong></span></a>
				        <a class="button red-nav btn-on-goal">
				          <span>$5</span>
				        </a>
				        <a class="button red-nav btn-on-goal">
				          <span>$25</span>
				        </a>
				        <a class="button red-nav btn-on-goal">
				          <span>$50</span>
				        </a>
				        <a class="button red-nav btn-on-goal" style="width: 300px !important;">
				          <span>other</span>
				        </a>
					</p>
      				<p class="control has-addons has-addons-centered">
        				<span>
        					<span class="btn-on-goal super-mario" style="color: red !important; text-align: center !important; width: 100px !important;">$</span>
        				</span>
        				<input class="input h-fix super-mario" type="text" placeholder="Amount of money">
        				<a class="button is-primary red-nav btn-on-goal" style="border: 5px; border-color: red !important;">
          					<strong>set goal</strong>
        				</a>
        	</p>
	      </div>
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
      showTreehouseInfo: true,
      showDuoLingoInfo: true,
    };
  },
};
</script>

<style lang="css" scoped>
  .margin-goal {
    margin-top: 15px !important;
  }
  .btn-on-goal {
      padding: 10px !important;
      font-size: 20px !important;
      text-transform: uppercase !important;
      height: 100px !important;
      width: 200px !important;
      font-size: 30px !important;
    }
    .red-inverse-nav {
      color: white !important;
      border-color: red !important;
      background-color: red !important;
  }
  .red-inverse-nav:hover {
    background-color: red !important;
    color: white !important;
    border-color: red !important;
  }
  .red-inverse-nav:focus {
    background-color: red !important;
    color: white !important;
    border-color: red !important;
  }
  .red-inverse-nav:active {
    background-color: red !important;
    color: white !important;
    border-color: red !important;
  }
  .h-fix {
    height: 100px !important;
  }
  .super-mario {
    font-size: 40px !important;
    line-height: 200%;
  }
</style>