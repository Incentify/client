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

<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete"></button>
    </header>
    <section class="modal-card-body">
      Hello World

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.

Second level

Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.

In fermentum leo eu lectus mollis, quis dictum mi aliquet.
Morbi eu nulla lobortis, lobortis est in, fringilla felis.
Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
Ut non enim metus.
Third level

Quisque ante lacus, malesuada ac auctor vitae, congue non ante. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.

Donec blandit a lorem id convallis.
Cras gravida arcu at diam gravida gravida.
Integer in volutpat libero.
Donec a diam tellus.
Aenean nec tortor orci.
Quisque aliquam cursus urna, non bibendum massa viverra eget.
Vivamus maximus ultricies pulvinar.
Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.
Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et justo sodales elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.

Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.

Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.

Fourth level

Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.

Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.

Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.

Fifth level

Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.

Sixth level

Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.
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