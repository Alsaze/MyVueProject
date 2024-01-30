<template>
  <div class="block-info">
    <h4>Время работы</h4>
    <div class="block-info__content">
      <div class="block-info__text">
        <span>
          <IconReverseClock/>
        </span>
        <div class="block-info__container">
          <div class="block-info__title">
            {{ slotOne }}
          </div>
          <div class="block-info__subtitle">
            {{ subSlotOne }}
          </div>
        </div>
      </div>

      <div v-if="!button" class="block-info__text">
        <span>
          <IconReverseClock/>
        </span>
        <div class="block-info__container">
          <div class="block-info__title">
            {{ slotTwo }}
          </div>
          <div class="block-info__subtitle">
            {{ subSlotTwo }}
          </div>
        </div>
      </div>
      <div class="block-info__button" v-else>
        <AppButton
            background-color="red"
            :append-icon="IconBigArrowRight"
            width="208px"
        >
          Перейти в группу
        </AppButton>
      </div>
    </div>
  </div>
</template>
<script>
import IconReverseClock from "@/components/icons/IconReverseClock.vue";
import AppButton from "@/components/UI/app-button.vue";
import IconBigArrowRight from "@/components/icons/IconBigArrowRight.vue";

export default {
  name: 'block-info',
  computed: {
    IconBigArrowRight() {
      return IconBigArrowRight
    }
  },
  components: {AppButton, IconReverseClock},
  props: {
    button: {
      Boolean,
      default: false
    },
    slotOne: {},
    subSlotOne: {},
    slotTwo: {},
    subSlotTwo: {}
  }
}
</script>
<style lang="scss">
.block-info {
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

  }

  &__text {
    display: flex;
    flex-direction: row;

    span {
      margin-right: 15px;
    }
  }

  &__title {
    color: $clr-alt-text;
    @include txt-l;
    margin-bottom: 4px;
  }

  &__subtitle {
    @include txt-l-b;
  }

  &__button {
    margin-block: auto;
  }
}
</style>