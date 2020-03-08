<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="bounce" mode="out-in">
      <router-view class="main-content"/>
    </transition>
    <div class="polyfill">
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "@vue/composition-api";
  import NavBar from "@/views/generic/NavBar.vue";

  export default defineComponent({
      name: "Home",
      components: {
        NavBar,
      },
  })
</script>

<style lang="scss">
@import "src/styles/main";

  #app {
    @include grid-center;
    grid-template-rows: min-content 1fr;

    .polyfill {
      grid-row: -1;
      height: $padding;
    }
  }

  .main-content {
    @include grid-center;
    height: calc(100vh - #{$navbar-height} - #{2*$padding} - #{$padding});
    overflow-x: hidden;
    overflow-y: scroll;
    padding: $padding;
    width: calc(100% - #{2*$padding});
    & > * {
      max-width: 80rem;
    }
  }
</style>
