<template>

<div class="content">
    <div class="is-mobile lil-marg">
        <div class="has-text-right page-title">Dashboard</div>
    </div>

    <div class="card is-fullwidth goal-vertical-spacing">
        <div class="card-content">
            <div class="content">
                <h1><strong>Treehouse</strong> comrww <img src="../assets/treehouse-logo.png" class="is-pulled-right goal-provider-icon"></h1>
                <progress class="progress is-small is-success" value="45" max="100">45%</progress>
                <h3>45% of {{55}} Points</h3> Time Remaining: 1 day, 23 hours, 21 minutes
            </div>
        </div>
    </div>

    <div class="card is-fullwidth goal-vertical-spacing">
        <div class="card-content">
            <div class="content">
                <h1><strong>DuoLingo</strong> comrww <img src="../assets/duolingo-logo.png" class="is-pulled-right goal-provider-icon"></h1>
                <progress class="progress is-small is-success" value="5" max="100">5%</progress>
                <h3>5% of {{55}} Points</h3> Time Remaining: 2 days, 3 hours, 10 minutes
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
    .goal-vertical-spacing {
    	margin-top: .75rem;
    }

    .page-title {
      font-size: 1.8rem;
      color: #587272;
      margin-right: 3%;
    }

    .goal-provider-icon {
      height: 2.2rem;
      width: 2.2rem;
    }
</style>