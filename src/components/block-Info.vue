<template>
  <div class="block-info">
    <h4>{{ title }}</h4>
    <div class="block-info__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import IconReverseClock from "@/components/icons/IconReverseClock.vue";
import AppButton from "@/components/UI/app-button.vue";
import IconBigArrowRight from "@/components/icons/IconBigArrowRight.vue";
import BlockInfoText from "@/components/block-info-text.vue";

export default {
  name: 'block-info',
  components: {BlockInfoText, AppButton, IconReverseClock},
  props: {
    title: {}
  }
}
</script>
<style scoped lang="scss">
.block-info {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 690px;
  padding: 25px;
  background-color: $clr-bg-light;

  h4 {
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 700;
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

  }

  &__button {
    margin-block: auto;
  }
}
</style>