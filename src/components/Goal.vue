<template>
<div class="content">

  <div class="is-mobile">
    <div class="has-text-right page-title">New Goal</div>
  </div>

  <div class="card is-fullwidth">
    <div class="card-content">
      <div class="content" v-for="integration in integrations">
        <div v-on:click="integration.showIntegration = !integration.showIntegration" v-show="!integration.showIntegration">
          <strong><span>{{integration.name}}<i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-on:click="integration.showIntegration = !integration.showIntegration" v-show="integration.showIntegration">
          <strong><span>{{integration.name}}<i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-show="integration.showIntegration" class="animated fadeIn">
          <p>{{integration.description}}</p>
          <add-goal></add-goal>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import addGoal from './add-goal.vue';

import _ from 'lodash';

export default {

  data() {
    return {
      showIntegration: true,
      integrations: "",
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
  ready() {
    this.$http.get('http://localhost:3000/integrations').then((response) => {
        // success callback
        console.log(response)
        this.integrations = response.body.map(function(i) {
          return _.extend(i, { showIntegration: false })
        })
      }, (response) => {
        // error callback
        this.failure = !this.failure;
      });
  }
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