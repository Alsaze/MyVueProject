<template>
  <teleport to="body">
    <div class="app-account-exit" v-if="modelValue">
      <div class="app-account-exit-header">
        <h6>Выход из аккаунта</h6>
        <AppButton
            @click="$emit('update:modelValue', false)"
            :icon="IconCross"
        />
      </div>

      <div>Вы уверены что хотите выйти из аккаунта?</div>

      <div class="app-account-exit-choice">
        <AppButton
            outside
            common
            @click="$emit('update:modelValue', false)"
        >
          Отмена
        </AppButton>
        <AppButton
            background-color="red"
            common
            @click=exitAccount
        >
          Выйти
        </AppButton>
      </div>

      <div>Правила сайта запрещают регистрировать более одной учетной записи.</div>

      <div class="app-account-exit-text">
        В случае несоблюдения правил - <span>блокировка <br>
      связанных аккаунтов</span> без возможности возврата <br>
        <span>денежных средств!</span>
      </div>

      <p>Будьте внимательны!</p>
    </div>
  </teleport>
</template>

<script>
import AppButton from "@/components/UI/app-button.vue";
import IconCross from "@/components/icons/IconCross.vue";
import router from "@/router/router";

export default {
  components: {AppButton, IconCross},
  data() {
    return {
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
    exitAccount() {
      this.$store.commit('setIsAuthorization', false);
      this.$emit('update:modelValue', false);

      router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.app-account-exit {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: auto;
  width: 420px;

  padding: 20px;
  background-color: $clr-bg-2;
  text-align: center;

  div {
    @include txt-m;
    margin-bottom: 17px;
  }

  .app-account-exit-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    align-items: center;

    button {
      position: absolute;
      right: 0;
    }
  }

  .app-account-exit-choice {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 22px;
  }

  .app-account-exit-text {
    span {
      @include txt-m-b;
      color: $clr-red-active;
    }
  }
}
</style>