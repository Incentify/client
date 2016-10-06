<template>

<div class="content">
<template>	
<div class="global-font-size">
    <div class="is-mobile lil-marg">
        <div class="has-text-right page-title">New Goal</div>
    </div>
      <div class="animated slideInUp ">
      <div class="card is-fullwidth margin-goal">
          <div class="card-content ">
              <div class="content">
                  <div v-on:click="showTreehouseInfo = !showTreehouseInfo" v-show="showTreehouseInfo"><strong><span>Treehouse<i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong></div>
                  <div v-on:click="showTreehouseInfo = !showTreehouseInfo" v-show="!showTreehouseInfo"><strong><span>Treehouse<i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong></div>
                  <div v-show="!showTreehouseInfo" class="animated fadeIn">
                      <p>Treehouse brings affordable technology education to people everywhere in order to help them achieve their dreams and change the world.</p>
                      <p class="control has-addons">
                          <a class="button red-inverse-nav btn-on-goal more-button-width">
                              <span class="icon is-small"></span>
                              <span><strong>incentive</strong></span></a>
                          <a class="button red-nav btn-on-goal" v-bind:class="{ 'is-active': isActive.tab === 1}">
                              <span @click="isActive.tab = 1">$5</span>
                          </a>
                          <a class="button red-nav btn-on-goal" v-bind:class="{ 'is-active': isActive.tab === 4}">
                              <span @click="isActive.tab = 4">$25</span>
                          </a>
                          <a class="button red-nav btn-on-goal" v-bind:class="{ 'is-active': isActive.tab === 2}">
                              <span @click="isActive.tab = 2">$50</span>
                          </a>
                          <a class="button red-nav btn-on-goal more-button-width" @click="showTreehouseAmount = !showTreehouseAmount" v-bind:class="{ 'is-active': isActive.tab === 3}">
                              <span @click="isActive.tab = 3">other</span>
                          </a>
                           <a class="button red-nav btn-on-goal more-button-width submitButton">
                                  <button>Submit</button>
                           </a>
                      </p>
                      <div class="animated fadeIn" v-show="!showTreehouseAmount">
                        <p class="control has-addons has-addons-centered">
                          <input class="input" type="text" placeholder="Amount of money">
                          <a class="button is-primary red-nav btn-on-goal">
                              <strong>set goal</strong>
                          </a>
                        </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="card is-fullwidth margin-goal">
          <div class="card-content goal-vertical-spacing">
              <div class="content">
                  <div v-on:click="showDuoLingoInfo = !showDuoLingoInfo" v-show="showDuoLingoInfo"><strong><span>DuoLingo<i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong></i></div>
                  <div v-on:click="showDuoLingoInfo = !showDuoLingoInfo" v-show="!showDuoLingoInfo"><strong><span>DuoLingo<i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong></div>
                  <div v-show="!showDuoLingoInfo" class="animated fadeIn">
                      <p>Learning with Duolingo is fun and addictive. Earn points for correct answers, race against the clock, and level up. Our bite-sized lessons are effective, and we have proof that it works.</p>
                          <p class="control has-addons">
                              <a class="button red-inverse-nav btn-on-goal more-button-width">
                                  <span class="icon is-small"></span>
                                  <span><strong>incentive</strong></span></a>
                              <a class="button btn-on-goal" v-bind:class="{ 'is-active': isActive.tab === 1}">
                                  <span @click="isActive.tab = 1">$5</span>
                              </a>
                              <a class="button btn-on-goal" v-bind:class="{ 'is-active': isActive.tab === 4}">
                                  <span @click="isActive.tab = 4">$25</span>
                              </a>
                              <a class="button btn-on-goal" v-bind:class="{ 'is-active': isActive.tab === 2}">
                                  <span @click="isActive.tab = 2">$50</span>
                              </a>
                              <a class="button btn-on-goal more-button-width" @click="showDuoAmount = !showDuoAmount" v-bind:class="{ 'is-active': isActive.tab === 3}">
                                  <span @click="isActive.tab = 3">other</span>
                              </a>
                               <a class="button red-nav btn-on-goal more-button-width submitButton">
                                  <button>Submit</button>
                              </a>
                          </p>
                          <div class="animated fadeIn" v-show="!showDuoAmount">
                            <p class="control has-addons has-addons-centered">                 
                                <input class="input" type="text" placeholder="Amount of money">
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
      isActive: {
        tab: 1,
      },
    };
  },
  methods: {
    changeTabColor() {
      this.isActive = !this.isActive;
    },
  },

};
</script>

<style lang="css" scoped>
    .page-title {
    font-size: 1.8rem;
    color: #587272;
    margin-right: 2%;
    padding-bottom: 2%;
  }
   .goal-vertical-spacing {
      margin-top: .75rem;
    }

    .submitButton {
      margin-left: 5%;
    }
</style>