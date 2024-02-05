<template>
  <Teleport to="body">
    <div class="AppAuthorization-container" v-if="modelValue">
      <div class="AppAuthorization-container-header">
        <h6>
          Авторизация
        </h6>
        <AppButton
            :icon="IconCross"
            @click="$emit('update:modelValue', false)"
        >
        </AppButton>
      </div>
      <div>Вы можете авторизоваться через представленные соц.сети</div>
      <div class="AppAuthorization-container-top-buttons">
        <AppButton
            :append-icon="IconVk"
            background-color="#5865f2"
            width="150px"
            @click=authorization
        >
          Вконтакте
        </AppButton>
        <AppButton
            :prepend-icon="IconGoogle"
            background-color="#fff"
            color="black"
            width="150px"
            @click=authorization
        >
          Google
        </AppButton>
      </div>
      <AppButton
          :prepend-icon="IconYandex"
          background-color="red"
          width="150px"
          @click=authorization
      >
        Яндекс
      </AppButton>
    </div>
  </Teleport>
</template>
<script>
import AppButton from "@/components/UI/app-button.vue";
import IconVk from "@/components/icons/IconVk.vue";
import IconYandex from "@/components/icons/IconYandex.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconCross from "@/components/icons/IconCross.vue";

export default {
  components: {AppButton},
  data() {
    return {
      IconVk,
      IconYandex,
      IconGoogle,
      IconCross
    }
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    authorization() {
      this.$store.commit('setIsAuthorization', true);
      this.$emit('update:modelValue', false);
    }
  }
}
</script>
<style lang="scss" scoped>
.AppAuthorization-container {
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: $clr-bg-2;
  padding: 20px 35px;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    margin-bottom: 17px;
  }

  .AppAuthorization-container-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    button {
      position: absolute;
      right: 0;
    }
  }

  .AppAuthorization-container-top-buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}
</style>