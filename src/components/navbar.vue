<template>

  <!-- <footer class="card-footer navbar-background-color"> -->
    <!-- <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'dashboard'}"><i class="fa fa-tachometer navbar-font-size" aria-hidden="true"></i></a>
    <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'profile'}"><i class="fa fa-user navbar-font-size" aria-hidden="true"></i></a>
    <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'settings'}"><i class="fa fa-cog navbar-font-size" aria-hidden="true"></i></a>
    <a class="card-footer-item btn-padding red-nav" href="#" v-link="{path:'goal'}"><i class="fa fa-plus navbar-font-size" aria-hidden="true"></i></a> -->

    <div class="tabs is-toggle is-fullwidth navbar-background-color">
      <ul>
        <!-- class binding works by checking if the tab key equals the @click value  -->
        <li v-bind:class="{ 'is-active': isActive.tab === 1}">
          <a v-link="{path:'dashboard'}" @click="isActive.tab = 1">
            <span class="icon"><i class="fa fa-tachometer navbar-font-size" aria-hidden="true"></i></span>
          </a>
        </li>

        <li v-bind:class="{ 'is-active': isActive.tab === 2}">
          <a v-link="{path:'profile'}" @click="isActive.tab = 2">
            <span class="icon"><i class="fa fa-user navbar-font-size" aria-hidden="true"></i></span>
          </a>
        </li>

        <li v-bind:class="{ 'is-active': isActive.tab === 3}">
          <a v-link="{path:'settings'}" @click="isActive.tab = 3">
            <span class="icon"><i class="fa fa-cog navbar-font-size" aria-hidden="true"></i></span>
          </a>
        </li>

        <li v-bind:class="{ 'is-active': isActive.tab === 4}">
          <a v-link="{path:'goal'}" @click="isActive.tab = 4">
            <span class="icon"><i class="fa fa-plus navbar-font-size" aria-hidden="true"></i></span>
          </a>
        </li>
      </ul>
    </div>
  <!-- </footer> -->

</template>

<script>
  export default {
    data() {
      return {
        isActive: {
          tab: 1,
        },
      };
    },
    methods: {
      changeTabColor() {
        this.isActive = !this.isActive;
      },
    },
  };
</script>

<style scoped>

.navbar-font-size {
  font-size: 2.5rem;
}

.navbar-background-color{
  background-color: ghostwhite;
}
</style>
