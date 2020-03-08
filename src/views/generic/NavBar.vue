<template>
  <div class="NavBar">
    <p @click="$router.push({name: 'Home'})" class="hoverable">Grzyb Grabiszyński</p>
    <p class="hoverable" @click="$router.push({name: 'shrooms'})">🍄</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
    name: "NavBar",
})
</script>

<style scoped lang="scss">
@import "src/styles/main";

.NavBar {
  z-index: 10;
  @include grid-center;
  grid-template-columns: 1fr min-content;
  height: $navbar-height;
  align-self: start;
  background-color: $secondary;
  color: $secondary-accent;
  font-weight: 900;
  font-size: $x-large;

  & > * {
    margin: $padding;
  }
}
</style>