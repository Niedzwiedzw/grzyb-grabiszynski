<template>
  <div class="Shrooms">
    <input type="text" placeholder="wyszukaj grzyba" v-model="search">
      <transition-group name="bounce" mode="out-in" class="shroomGrid">
        <shroom
            v-for="mushroom of displayedMushrooms"
            :key="mushroom.name"
            :shroom="mushroom"
            @click.native="$router.push({name: 'shroom-detail', params: {shroomName: mushroom.name.replace(' ', '-')}})"
        />
      </transition-group>
  </div>
</template>

<script lang="ts">
import {filter, some, isEmpty, every} from 'lodash';
import {defineComponent, ref, computed} from '@vue/composition-api';
import Shroom from "@/views/shrooms/Shroom.vue";
import {ShroomRaw, shrooms} from "@/data/legacy";
import {Mushroom} from "@/models";

export default defineComponent({
    name: "Shrooms",
    components: {
        Shroom,
    },
    setup() {
        const search = ref<string>('');
        const searchQuery = computed<string[]>(() => filter(search.value.toLowerCase().split(/\s+/), (w) => !isEmpty(w)));
        const mushrooms = ref<Mushroom[]>(shrooms.map((s) => new Mushroom(s)));

        const displayedMushrooms = computed<Mushroom[]>(
            () => filter(
                mushrooms.value,
                (m) => every(searchQuery.value, (w) => m.name.toLowerCase().includes(w) || m.description.toLowerCase().includes(w)),
            )
        );

        return {
            searchQuery,
            mushrooms,
            search,
            displayedMushrooms,
        };
    },
})
</script>

<style scoped lang="scss">
@import "src/styles/main";

.Shrooms {
  input {
    margin: $padding*2 0;
    width: $shroom-size - $padding;
    text-align: center;
  }
  .shroomGrid {
    @include grid-center;
    max-width: 100vw;
    grid-template-columns: repeat(auto-fill, minmax(#{$shroom-size}, 1fr));
    grid-gap: $padding;
  }
}
</style>