<template>
  <div id="app">
    <nav-bar class="navbar"></nav-bar>
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
    grid-template-rows: 1fr;

    .navbar {
      position: sticky;
      top: 0;
    }
  }

  .main-content {
    display: grid;
    padding: $padding;
    align-items: center;
    justify-items: center;
    &:after {
      content: "created by wojciech.brozek@niedzwiedz.it";
      color: $white;
      height: $padding;
      opacity: .4;
      font-size: $x-small;
    }
  }
</style>
