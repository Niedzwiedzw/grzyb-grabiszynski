<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="bounce" mode="out-in" class="main-content">
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
    display: grid;
    height: 100%;
    padding: $padding;
    overflow-x: hidden;
    overflow-y: scroll;
    align-items: center;
    justify-items: center;
    &:after {
      content: "created by wojciech.brozek@niedzwiedz.it";
      color: $white;
      height: $padding;
      opacity: .4;
    }
    & > * {
      max-width: 80rem;
    }
  }
</style>
