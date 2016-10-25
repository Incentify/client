<template>
  <div>
    <div class="colorBlock">Type Your {{integrationName}} Username:</div>
    <input class="input " type="text" v-model="goal.username">

    <div class="colorBlock">Choose A Goal</div>
    <input class="input " type="number" min="{{tempData.min}}" placeholder="{{integrationName}} requires at least {{tempData.min}} points" v-model="goal.pointGoal">

    <div class="colorBlock">Choose Incentive</div>
    <div class="animated fadeIn">
      <p class="control has-addons has-addons-centered">
        <input class="input" type="number" max="1000" placeholder="$5 to $1000" v-model="goal.amount">
        <a class="button is-active">
          <strong>Amount</strong>
        </a>
      </p>
    </div>
    <button class="button is-info is-fullwidth" @click="commit()">Commit</button>
  </div>
</template>

<script>
  export default {
    props: [
      'integration-name',
      'integration-short-name',
    ],
    data() {
      return {
        showIntegration$Input: true,
        activeTab: {
          tab: 1,
        },
        tempData: {
          min: 500,
          name: 'Treehouse',
        },
        goal: {
          username: '',
          pointGoal: '',
        }
      };
    },
    methods: {
      commit() {
        var shortname = this.integrationShortName.toLowerCase();
        this.$http.put('http://localhost:3000/commitments/' + shortname, this.goal).then((response) => {
          // success callback
          this.success = !this.success;
        }, (response) => {
          // error callback
          this.failure = !this.failure;
        });
      }
    }
  };
</script>


<style scoped>
  .flexy{
    display: flex;
    justify-content: center;
    margin-bottom: .75rem;
  }

  .input{
    margin-bottom: 2rem;
  }
    .incentiveOptions{
    margin-bottom: 2rem;
  }

  .colorBlock{
    background-color: #00d1b2;
    text-align: center;
    border-radius: 3px;
    margin-bottom: 3%;
    padding: 1%;
  }
</style>