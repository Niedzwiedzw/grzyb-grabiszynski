<template>
  <div class="Shroom" :style="style">
    <h3>{{shroom.name}}</h3>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from '@vue/composition-api';
import {Mushroom} from "@/models";

export default defineComponent({
    name: "Shroom",
    props: {
        shroom: {
            type: Object as () => Mushroom,
            required: true,
        },
    },
    setup(props) {

        const style = computed(() => ({
            'background-image': `url(${props.shroom.coverImage})`,
            'background-size': 'cover',
        }));

        return {
            style,
        };
    }
})
</script>

<style scoped lang="scss">
@import "src/styles/main";

.Shroom {
  @include grid-center;
  @include shroom-box;
  @include hoverable;

  h3 {
    @include grid-center;
    height: min-content;
    padding: $padding 0;
    background-color: rgba($black, .5);
    color: $white;
    text-align: center;
  }
}
</style>