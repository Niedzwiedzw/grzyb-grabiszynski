<template>
  <div class="Shroom" :style="style" :class="{hasWarning}">
    <h3>{{shroom.name}}</h3>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from '@vue/composition-api';
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

        const hasWarning = ref(props.shroom.hasWarning);

        return {
            style,
            hasWarning,
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

  &.hasWarning {
    border: 5px solid red;
  }

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