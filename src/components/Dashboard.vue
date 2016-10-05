<template>

<div class="content is-large">
    <div class="is-mobile lil-marg">
        <div class="has-text-right page-title">Dashboard</div>
    </div>
    <div class="card is-fullwidth margin-dash">
        <div class="card-content">
            <div class="content">
                <h1 class=""><strong>Goal Name</strong> username with GoalProvider</h1>
                <progress class="progress is-small is-success" value="15" max="100">15%</progress>
                <h3>percentage of goal completion%</h3>
            </div>
        </div>
    </div>
    <div class="card is-fullwidth margin-dash">
        <div class="card-content">
            <div class="content">
                <h1><strong>Treehouse</strong> comrww <img src="../assets/treehouse-logo.png" class="is-pulled-right goal-provider-icon"></h1>
                <progress class="progress is-small is-success" value="45" max="100">45%</progress>
                <h3>45%</h3>
            </div>
        </div>
    </div>
    <div class="card is-fullwidth margin-dash">
        <div class="card-content">
            <div class="content">
                <h1><strong>DuoLingo</strong> comrww <img src="../assets/duolingo-logo.png" class="is-pulled-right goal-provider-icon"></h1>
                <progress class="progress is-small is-success" value="5" max="100">5%</progress>
                <h3>5%</h3>
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
	margin-top: 1rem;
}
.page-title {
  font-size: 3rem;
  color: #587272;
}
.goal-provider-icon {
  height: 4rem;
  width: 4rem;
}
</style>