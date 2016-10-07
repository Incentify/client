<template>
<div class="content">

  <div class="is-mobile">
    <div class="has-text-right page-title">New Goal</div>
  </div>

  <div class="card is-fullwidth">
    <div class="card-content">
      <div class="content">
        <div v-on:click="showIntegration = !showIntegration" v-show="showIntegration">
          <strong><span>{{data.short_name}} data.short_name<i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-on:click="showIntegration = !showIntegration" v-show="!showIntegration">
          <strong><span>{{Treehouse}} data.short_name<i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-show="!showIntegration" class="animated fadeIn">
          <p>{{data.description}} data.description</p>
          <add-goal></add-goal>
        </div>
      </div>
    </div>
  </div>
</div>


</template>
<script>
import addGoal from './add-goal.vue';

export default {

  data() {
    return {
      showIntegration: true,
    };
  },
  methods: {
    changeTabColor() {
      this.isActive = !this.isActive;
    },
  },
  components: {
    addGoal,
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