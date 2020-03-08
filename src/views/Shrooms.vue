<template>
  <div class="Shrooms">
    <div class="shroomGrid">
      <shroom
          v-for="mushroom of mushrooms"
          :key="mushroom.name"
          :shroom="mushroom"
          @click.native="$router.push({name: 'shroom-detail', params: {shroomName: mushroom.name.replace(' ', '-')}})"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@vue/composition-api';
import Shroom from "@/views/shrooms/Shroom.vue";
import {ShroomRaw, shrooms} from "@/data/legacy";
import {Mushroom} from "@/models";

export default defineComponent({
    name: "Shrooms",
    components: {
        Shroom,
    },
    setup() {
        const mushrooms = ref<ShroomRaw[]>(shrooms.map((s) => new Mushroom(s)));
        return {
            mushrooms,
        };
    },
})
</script>

<style scoped lang="scss">
@import "src/styles/main";

.Shrooms {
  .shroomGrid {
    @include grid-center;
    max-width: 100vw;
    grid-template-columns: repeat(auto-fill, minmax(#{$shroom-size}, 1fr));
    grid-gap: $padding;
  }
}
</style>