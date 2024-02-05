<template>
  <div class="block-info-text">
    <div class="block-info-text__icon">
      <IconReverseClock/>
    </div>
    <div>
      <div class="block-info-text__title">
        {{ title }}
      </div>
      <div class="block-info-text__subtitle">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
import IconReverseClock from "@/components/icons/IconReverseClock.vue";

export default {
  name: "block-info-text",
  components: {IconReverseClock},
  props: ['title', 'subtitle']
}
</script>

<style scoped lang="scss">
.block-info-text {
  display: flex;
  flex-direction: row;

  &__icon {
    margin-right: 15px;
  }

  &__title {
    color: $clr-alt-text;
    @include txt-l;
    margin-bottom: 4px;
  }

  &__subtitle {
    @include txt-l-b;
  }
}
</style>