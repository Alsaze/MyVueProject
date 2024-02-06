<template>
  <header class="app-header">
    <nav class="app-header-left-side">
      <router-link to="/">Главная</router-link>
      <router-link to="/help">Помощь</router-link>
      <router-link to="/bonus">Бонусы</router-link>
      <router-link to="/divisions">Дивизион</router-link>
    </nav>
    <div class="app-header-right-side">
      <div v-if="$store.state.authorization.isAuthorization">
        <div class="app-header-wallet">
          <img src="/img/money.svg" alt="#">
          3 000 ₽
        </div>
        <AppButton
            background-color="red"
            common
        >
          Кошелек
        </AppButton>
        <AppButton
            class="app-header-wallet-user-logo"
            @click="dropListProfileShown = !dropListProfileShown"
        >
          <img src="/img/userface.svg" alt="#">
          <img src="/img/drop.svg" alt="#">
        </AppButton>
      </div>

      <div v-else>
        <AppButton
            common
            class="app-header-login-in"
        >
          Login in
        </AppButton>
        <AppButton
            common
            background-color="red"
            @click="authorizationShown = !authorizationShown"
        >
          Sign in
        </AppButton>
      </div>
    </div>
  </header>

  <AppAuthorization
      v-model="authorizationShown"
  />

  <AppDropListProfile
      v-model="dropListProfileShown"
  />
</template>
<script>
import AppButton from "@/components/UI/app-button.vue";

import AppAuthorization from "@/components/app-authorization.vue";
import AppDropListProfile from "@/components/app-drop-list-profile.vue";

export default {
  components: {AppButton, AppDropListProfile, AppAuthorization},
  data() {
    return {
      authorizationShown: false,
      dropListProfileShown: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  background-color: $clr-grey;
  @include txt-m;

  color: white;

  width: 100%;
  height: 105px;

  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  .app-header-left-side {
    display: flex;
    flex-direction: row;
    gap: 25px;

    > a {
      height: 50px;
      line-height: 50px;

      &:hover {
        opacity: 0.7;
      }

      &.router-link-active {
        color: $clr-red-active;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: $clr-red-active;
          bottom: 0;
          left: 0;
        }
      }
    }
  }

  .app-header-right-side > * {
    padding-right: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    .app-header-login-in {
      display: flex;

      width: 110px;
      height: 50px;

      justify-content: center;
      text-align: center;
      align-items: center;
    }

    .app-header-wallet {
      background-color: #57595D;
      display: flex;
      height: 50px;

      padding: 15px;
      align-items: center;
      gap: 10px;
    }

    .app-header-wallet-user-logo {
      margin-left: 15px;
      gap: 10px;
    }
  }
}
</style>