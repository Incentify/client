<template>
<div class="content">

  <div class="is-mobile">
    <div class="has-text-right page-title">New Goal</div>
  </div>
  <div class="animated slideInUp card is-fullwidth">
    <div class="card-content">
      <div class="content">
        <div v-on:click="showIntegration = !showIntegration" v-show="showIntegration">
          <strong><span>Treehouse<i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-on:click="showIntegration = !showIntegration" v-show="!showIntegration">
          <strong><span>Treehouse<i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-show="!showIntegration" class="animated fadeIn">
          <p>Treehouse brings affordable technology education to people everywhere in order to help them achieve their dreams and change the world.</p>
          <p class="control has-addons">
            <a class="button  ">
              <span class="icon is-small"></span>
              <span><strong>incentive</strong></span></a>

            <a class="button" v-bind:class="{ 'is-active': isActive.tab === 1}">
              <span @click="isActive.tab = 1">$5</span>
            </a>

            <a class="button" v-bind:class="{ 'is-active': isActive.tab === 4}">
              <span @click="isActive.tab = 4">$25</span>
            </a>

            <a class="button" v-bind:class="{ 'is-active': isActive.tab === 2}">
              <span @click="isActive.tab = 2">$50</span>
            </a>

            <a class="button" @click="showIntegration$Input = !showIntegration$Input" v-bind:class="{ 'is-active': isActive.tab === 3}">
              <span @click="isActive.tab = 3">other</span>
            </a>

            <a class="button submitButton">
              <button>Submit</button>
            </a>
          </p>
        </div>

        <div class="animated fadeIn" v-show="!showIntegration$Input">
          <p class="control has-addons has-addons-centered">
            <input class="input" type="text" placeholder="Amount of money">
            <a class="button is-primary  ">
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
      showIntegration: true,
      showIntegration$Input: true,
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