<template>
  <div class="division-item" :class="{'division-item--active': active}">
    <div>
      <img :src="image" alt="#" class="division-card__image">
    </div>
    <h6 class="division-item__title">
      {{ title }}
    </h6>

    <div class="division-item__field">
      <Component v-if="dayleReward">
        <IconCheck/>
      </Component>
    </div>
    <div class="division-item__field">
      <Component v-if="accessTransition">
        <IconCheck/>
      </Component>
    </div>
    <div class="division-item__field">
      <Component v-if="standardStickers">
        <IconCheck/>
      </Component>
    </div>
    <div class="division-item__field">
      <Component v-if="premiumStickers">
        <IconCheck/>
      </Component>
    </div>
    <div class="division-item__field">
      <Component v-if="showChat">
        <IconCheck/>
      </Component>
    </div>
    <div class="division-item__field">
      <Component v-if="lowCommissions">
        <IconCheck/>
      </Component>
    </div>
    <div class="division-item__subtitle">
      {{ subtitle }}
    </div>
    <AppButton
        class="division-item__button"
        :background-color="active? 'white' : 'red'"
        :color="active? 'black' : 'white'"
        common width="140px"
    >
      {{ active ? 'Ваш дивизион' : 'Пополнить' }}
    </AppButton>
  </div>
</template>
<script>
import AppButton from "@/components/UI/app-button.vue";
import IconCheck from "@/components/icons/IconCheck.vue";

export default {

  components: {IconCheck, AppButton},
  props: {
    image: {},
    title: {
      type: String,
      required: true
    },
    dayleReward: {
      type: Boolean,
      default: false
    },
    accessTransition: {
      type: Boolean,
      default: false
    },
    standardStickers: {
      type: Boolean,
      default: false
    },
    premiumStickers: {
      type: Boolean,
      default: false
    },
    showChat: {
      type: Boolean,
      default: false
    },
    lowCommissions: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
    },
  }
}
</script>
<style lang="scss">
.division-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;
  width: 220px;

  &--active {
    background: linear-gradient(158deg, #FFA268 29.19%, #FC6A56 99.55%);
  }

  &__title {
    margin-top: 9px;
    margin-bottom: 30px;
  }

  &__field {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 40px;

    background-color: #FF323326;
    @include btn-link-m;

    &:nth-child(even) {
      background-color: transparent;
    }
  }

  &__subtitle {
    margin-block: 30px;
    padding: 0 5px;
    @include txt-m;
    text-align: center;
  }

  &__button {
    margin-top: auto;
  }
}
</style>