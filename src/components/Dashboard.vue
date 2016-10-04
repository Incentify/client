<template>

<div class="global-font-size">
    <div class="is-mobile lil-marg">
        <div class="has-text-right page-title">Dashboard</div>
    </div>
    <div class="card is-fullwidth margin-dash">
        <div class="card-content">
            <div class="content">
                <strong>Goal Name</strong> username with GoalProvider
                <progress class="progress is-small is-success" value="15" max="100">15%</progress>
                percentage of goal completion%
            </div>
        </div>
    </div>
    <div class="card is-fullwidth margin-dash">
        <div class="card-content">
            <div class="content">
                <strong>Treehouse</strong> comrww
                <img src="../assets/treehouse-logo.png" class="is-pulled-right goal-provider-icon">
                <progress class="progress is-small is-success" value="45" max="100">45%</progress>
                45%
            </div>
        </div>
    </div>
    <div class="card is-fullwidth margin-dash">
        <div class="card-content">
            <div class="content">
                <strong>DuoLingo</strong> comrww
                <img src="../assets/duolingo-logo.png" class="is-pulled-right goal-provider-icon">
                <progress class="progress is-small is-success" value="5" max="100">5%</progress>
                5%
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

    };
  },
};
</script>

<style lang="css" scoped>
.margin-dash {
	margin-top: 15px;
}
.page-title {
  font-size: 40px; 
  color: #587272;
}
.goal-provider-icon {
  height: 50px; 
  width: 50px;
}
</style>