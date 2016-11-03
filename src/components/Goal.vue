<template>
<div class="content">

  <div class="is-mobile">
    <div class="has-text-right page-title">New Goal</div>
  </div>

  <div class="card is-fullwidth integrationPanel" v-for="integration in integrations">
    <div class="card-content">
      <div class="content">
        <div v-on:click="integration.showIntegration = !integration.showIntegration" v-show="!integration.showIntegration">
          <strong><span>{{integration.name}}<i class="fa fa-plus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-on:click="integration.showIntegration = !integration.showIntegration" v-show="integration.showIntegration">
          <strong><span>{{integration.name}}<i class="fa fa-minus is-pulled-right set-icon-size" aria-hidden="true"></i></span></strong>
        </div>

        <div v-show="integration.showIntegration" class="animated fadeIn">
          <p>{{integration.description}}</p>
          <add-goal :integration-name="integration.name" :integration-short-name="integration.short_name"></add-goal>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- unused modal component -->
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete"></button>
    </header>
    <section class="modal-card-body">

Save changes
Cancel

    </section>
    <footer class="modal-card-foot">
      <a class="button is-primary">Save changes</a>
      <a class="button">Cancel</a>
    </footer>
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
      integrations: {
        name: "",
      },
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
  // init function
  ready() {
    this.$http.get(process.env.API_URL + '/integrations').then((response) => {
      // success callback
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

  .integrationPanel{
    margin-bottom: .5rem;
  }
</style>