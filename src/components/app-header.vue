<template>
  <header class="app-header">
    <nav class="app-header-left-side">
      <router-link to="/">Главная</router-link>
      <router-link to="/help">Помощь</router-link>
      <router-link to="/bonus">Бонусы</router-link>
      <router-link to="/division">Дивизион</router-link>
    </nav>
    <div class="app-header-right-side">
      <div v-if="isAuthorization">
        <app-button common class="app-header-login-in">
          Login in
        </app-button>
        <app-button common background-color="red"
                    @click="authorizationShown = !authorizationShown"
        >
          Sign in
        </app-button>
      </div>

      <div v-else>
        <div class="app-header-wallet">
          <img src="/img/money.svg" alt="#">
          3 000 ₽
        </div>
        <app-button background-color="red" common>
          Кошелек
        </app-button>
        <app-button
            class="app-header-wallet-user-logo"
            @click="dropListProfileShown = !dropListProfileShown"
        >
          <img src="/img/userface.svg" alt="#">
          <img src="/img/drop.svg" alt="#">
        </app-button>
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
import appDropListProfile from "@/components/app-drop-list-profile.vue";

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
  props: {
    isAuthorization: {
      type: Boolean,
      default: false
    }
  }
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