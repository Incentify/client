<template>
<<<<<<< HEAD
	
<div class="global-font-size">
    <div class="is-mobile lil-marg">
        <div class="has-text-right main-title">New Goal</div>
    </div>
    <div class="card is-fullwidth margin-goal">
        <div class="card-content">
            <div class="content">
                <div v-on:click="showTreehouseInfo = !showTreehouseInfo" v-show="showTreehouseInfo"><strong>Treehouse</strong><i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></div>
                <div v-on:click="showTreehouseInfo = !showTreehouseInfo" v-show="!showTreehouseInfo"><strong>Treehouse</strong><i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></div>
                <div v-show="!showTreehouseInfo">
                    <p>Treehouse brings affordable technology education to people everywhere in order to help them achieve their dreams and change the world.</p>
                    <p class="control has-addons">
                        <a class="button red-inverse-nav btn-on-goal more-button-width">
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
                        <a class="button red-nav btn-on-goal more-button-width">
                            <span>other</span>
                        </a>
                    </p>
                    <p class="control has-addons has-addons-centered">
                        <span>
                  <span class="btn-on-goal set-goal formatting-around-dollar-sign">$</span>
                        </span>
                        <input class="input h-fix set-goal" type="text" placeholder="Amount of money">
                        <a class="button is-primary red-nav btn-on-goal">
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
                <div v-on:click="showDuoLingoInfo = !showDuoLingoInfo" v-show="showDuoLingoInfo"><strong>DuoLingo</strong><i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></div>
                <div v-on:click="showDuoLingoInfo = !showDuoLingoInfo" v-show="!showDuoLingoInfo"><strong>DuoLingo</strong><i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></div>
                <div v-show="!showDuoLingoInfo">
                    <p>Learning with Duolingo is fun and addictive. Earn points for correct answers, race against the clock, and level up. Our bite-sized lessons are effective, and we have proof that it works.</p>
                    <p class="control has-addons">
                        <a class="button red-inverse-nav btn-on-goal more-button-width">
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
                        <a class="button red-nav btn-on-goal more-button-width">
                            <span>other</span>
                        </a>
                    </p>
                    <p class="control has-addons has-addons-centered">
                        <span>
                  <span class="btn-on-goal set-goal formatting-around-dollar-sign">$</span>
                        </span>
                        <input class="input h-fix set-goal" type="text" placeholder="Amount of money">
                        <a class="button is-primary red-nav btn-on-goal">
                            <strong>set goal</strong>
                        </a>
                    </p>
                </div>
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
      showTreehouseAmount: true,
      showDuoAmount: true,
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
<<<<<<< HEAD
  /*General Heigh Fix for Mobilization*/
  .h-fix {
=======
  /*Height Fix*/
  .h-fix { 
>>>>>>> goalanimation
    height: 100px !important;
  }
  .set-goal {
    font-size: 40px !important;
    line-height: 200%;
  }
  .main-title {
    font-size: 40px; 
    color: #587272;
  }
  .set-icon-size {
    font-size: 60px;
  }
  .more-button-width {
    width: 300px !important;
  }
  .formatting-around-dollar-sign {
    color: red !important; 
    text-align: center !important; 
    width: 100px !important;
  }
</style>