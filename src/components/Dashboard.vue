<template>

<div class="content">
    <div class="is-mobile lil-marg">
        <div class="has-text-right page-title">Dashboard</div>
    </div>

    <div class="card is-fullwidth goal-vertical-spacing"v-for="x in dashboardData">
        <div class="card-content">
            <div class="content">
                <h1><strong>Treehouse </strong>{{x.username}}<img src="../assets/treehouse-logo.png" class="is-pulled-right goal-provider-icon"></h1>
                <progress class="progress is-small is-success" value="{{progress}}" max="100">45%</progress>
                <h3>{{progress}} of {{x.goal_amount}} Points</h3>
                <h6>End Date:</h6><span>{{ x.end | moment "dddd, MMMM Do YYYY, h:mm:ss a" }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

  data() {
    return {
        dashboardData: "",
        starting_points: 0,
        goal_points: 0,
        current_points: 0,
        progress: 0,
    };
  },
  // on-component-load function
  ready() {
   this.$http.put(process.env.API_URL + '/users/update').then((response) => {
      // success callback
    }, (response) => {
      // error callback
      this.failure = !this.failure;
    });

    this.$http.get(process.env.API_URL + '/users').then((response) => {
      // success callback
      // `response.body.length -1` is used to get last array item
        this.starting_points = response.body[response.body.length -1].starting_points;
        console.log(this.starting_points);

        this.goal_points = response.body[response.body.length -1].goal_amount;
        console.log(this.goal_points);

        this.current_points = response.body[response.body.length -1].value;
        console.log(this.current_points);

        this.progress = parseFloat((this.current_points - this.starting_points));
        console.log(this.progress);

        this.dashboardData = response.body.map(function(i) {
          return _.extend(i, { showUserInfo: false })

      })
    }, (response) => {
      // error callback
      this.failure = !this.failure;
    });
  }
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