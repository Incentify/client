<template>
  <div>
    <div class="colorBlock">Type Your {{tempData.name}} Username</div>
    <input class="input " type="text">

    <div class="colorBlock">Choose A Goal</div>
    <input class="input " type="number" min="{{tempData.min}}" placeholder="{{tempData.name}} requires at least {{tempData.min}} points">
    <div class="colorBlock">Choose Incentive</div>

    <p class="control has-addons flexy incentiveOptions">
      <a class="button" v-bind:class="{ 'is-active': activeTab.tab === 1}">
        <span @click="activeTab.tab = 1">$5</span>
      </a>

      <a class="button" v-bind:class="{ 'is-active': activeTab.tab === 2}">
        <span @click="activeTab.tab = 2">$25</span>
      </a>

      <a class="button" v-bind:class="{ 'is-active': activeTab.tab === 3}">
        <span @click="activeTab.tab = 3">$50</span>
      </a>

      <a class="button" @click="showIntegration$Input = !showIntegration$Input" v-bind:class="{ 'is-active': activeTab.tab === 4}">
        <span @click="activeTab.tab = 4">other</span>
      </a>
    </p>
  </div>

  <div class="animated fadeIn" v-show="!showIntegration$Input">
    <p class="control has-addons has-addons-centered">
      <input class="input" type="text" placeholder="Up to $1000" value="{{incentiveAmount}}">
      <a class="button is-active">
        <strong>Amount</strong>
      </a>
    </p>
  </div>
  <button class="button is-info is-fullwidth">Commit</button>
</template>

<script>
  export default {
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
      };
    },
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