<template>
  <div class="wrapper">
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
    <button class="button is-info is-fullwidth commit" @click="commit()">Commit</button>
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
        stripe_token: {},
        price: 1000,
        stripe_instance: {},
        order_status: 'READY',
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
    ready() {
      var that = this;
      this.stripe_instance = StripeCheckout.configure({
        key: 'pk_test_t5EdiYNBA1LOp7En1xhBOYVp',    //put your own publishable key here
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: function(token) {
          that.stripe_token= token;
          // that.sendDataToServer();
          that.sendDataToServer();
        }
      });
    },
    methods: {
      commit() {
        var shortname = this.integrationShortName.toLowerCase();
        this.$http.post(process.env.API_URL + '/commitments/' + shortname, this.goal)
          .then((response) => {
            // success callback
            this.purchaseStuff();
          }, (response) => {
            // error callback
            this.failure = !this.failure;
          });
        var that = this;
          this.$swal({
            title: 'Commit!',
            text: "Are you sure you want to commit to this weekly goal?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Absolutely!'
          }).then(function(){
            this.goal.username = '';
            this.goal.pointgoal = '';
            this.goal.amount = 0;
          })
      },
      purchaseStuff() {
        this.stripe_instance.open({
          name: 'Incentify',
          description: 'New Commitment',
          amount: this.price
        })
        // console.log('attempting to get a token');
      },
      sendDataToServer() {
        console.log("data 2 server");
        this.order_status= "PENDING";
        this.$http.post(process.env.API_URL + '/stripe/process_payment', {token_id: this.stripe_token.id, price: this.price})
        .then((response) => {
          // console.log(response.body);
          this.order_status= "Successfully Completed";
        },(response) => {
          // error callback
          // console.log(response.body);
          this.order_status= "Failed";
        });
      },
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
    background-color: #fbb13c;
    text-align: center;
    border-radius: 3px;
    margin-bottom: 3%;
    padding: 1%;
    color: white;
  }

  .wrapper {
    font-size: 1.2rem;
  }

  .commit {
    background-color: #2176ae;
  }
</style>