<template>
    <div>
        <div class="colorBlock">choose a goal</div>
        <input class="input" type="number" min="{{tempData.min}}" placeholder="{{tempData.name}} requires at least {{tempData.min}} points">
        <div class="colorBlock">choose incentive</div>

        <p class="control has-addons">
            <a class="button "><span><strong>incentive</strong></span></a>


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
        <input class="input" type="text" placeholder="Amount of money" value="{{incentiveAmount}}">
        <a class="button is-primary  ">
          <strong>set goal</strong>
        </a>
      </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tempData: {
        min: 500,
        name: 'Treehouse',
      },
    };
  },
};
</script>


<style scoped>
.colorBlock{
  background-color: #00d1b2;
  text-align: center;
  border-radius: 3px;
  margin-bottom: 3%;
}
</style>