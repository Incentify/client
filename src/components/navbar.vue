<template>

  <div class="tabs is-toggle is-fullwidth navbar-background-color">
    <ul>
      <!-- class binding works by checking if the tab key equals the @click value  -->
      <!-- Dashboard -->
      <li v-bind:class="{ 'is-active': isActive.tab === 1}">
        <a v-link="{path:'dashboard'}" @click="isActive.tab = 1">
          <span class="icon"><i class="fa fa-tachometer navbar-font-size" aria-hidden="true"></i></span>
        </a>
      </li>

      <!-- Goal -->
      <li v-bind:class="{ 'is-active': isActive.tab === 4}">
        <a v-link="{path:'goal'}" @click="isActive.tab = 4">
          <span class="icon"><i class="fa fa-plus navbar-font-size" aria-hidden="true"></i></span>
        </a>
      </li>

      <!-- Profile -->
      <li v-bind:class="{ 'is-active': isActive.tab === 2}">
        <a v-link="{path:'profile'}" @click="isActive.tab = 2">
          <span class="icon"><i class="fa fa-user navbar-font-size" aria-hidden="true"></i></span>
        </a>
      </li>

      <!-- Settings -->
     <!--  <li v-bind:class="{ 'is-active': isActive.tab === 3}">
        <a v-link="{path:'settings'}" @click="isActive.tab = 3">
          <span class="icon"><i class="fa fa-cog navbar-font-size" aria-hidden="true"></i></span>
        </a>
      </li> -->
    </ul>
  </div>

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
  font-size: 3rem;
}

.navbar-background-color{
  background-color: ghostwhite;
}
</style>
