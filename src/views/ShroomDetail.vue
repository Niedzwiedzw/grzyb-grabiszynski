<template>
  <div class="ShroomDetail" v-if="!loading" :style="style">
    <h3>{{mushroom.name}}</h3>
    <a
        v-for="link of mushroom.links"
        :key="link"
        :href="link"
    >
      [ ℹ ️] {{link.split('.')[1].toUpperCase()}}
    </a>
    <p>{{mushroom.description}}</p>
    <img v-for="src of mushroom.images" :key="src"  :src="src" :alt="`${mushroom.name} - zdjęcie ${src}`">
    <div class="placeholder">

    </div>
  </div>

  <div v-else></div>
</template>

<script lang="ts">
import {find, isNil} from 'lodash';
import {computed, defineComponent, onMounted, ref} from '@vue/composition-api';
import {Mushroom} from "@/models";
import {shrooms} from "@/data/legacy";
import {transparentBackground} from "@/helpers";


export default defineComponent({
    name: "ShroomDetail",
    props: {
        shroomName: {
            type: String as () => string,
            required: true,
        },
    },
    setup(props) {
        const loading = ref<boolean>(true);
        const mushroom = ref<Mushroom | null>(null);

        const getMushroom = () => {
            loading.value = true;
            const raw = find(shrooms, (s) => s.name.replace(' ', '-') === props.shroomName) ?? null;
            mushroom.value = !isNil(raw) ? new Mushroom(raw) : null;
            loading.value = false;
        };

        onMounted(getMushroom);
        //
        // const style = computed(() => ({
        //     'background-image': `linear-gradient(lightgrey, lightgrey), url(${mushroom.value?.coverImage ?? ''})`,
        //     'background-size': 'cover',
        //     'background-blend-mode': 'screen',
        // }));
        const style = computed(() => transparentBackground(mushroom.value?.coverImage ?? '', .1));

        return {loading, mushroom, style};
    },
})
</script>

<style scoped lang="scss">
@import "src/styles/main";

.ShroomDetail {
  padding-bottom: 3*$padding;

  & > * {
    width: 100%;
    text-align: center;
    background-color: rgba(black, .4);
    color: $white;
    padding: $padding;
  }

  .placeholder {
    background: none;
    height: $padding;
  }
}
</style>