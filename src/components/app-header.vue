<template>
  <div class="app-header">
    <div class="left-side">
      <a href="http://localhost:8080/new">Главная</a>
      <a href="http://localhost:8080/new">Помощь</a>
      <a href="http://localhost:8080/new">Бонусы</a>
      <a href="http://localhost:8080/new">Дивизионы</a>
    </div>
    <div class="right-side">
      <div v-if="Math.random() > 0.5">
        <button class="login-in">
          Login in
        </button>
        <app-button>
          <div>
            Sign in
          </div>
        </app-button>
      </div>

      <div v-else>
        <div class="wallet">
          <img src="../../public/img/money.svg" alt="#">
          3 000 ₽
        </div>
        <app-button>
          Кошелек
        </app-button>
        <button class="user-logo">
          <img src="../../public/img/userface.svg" alt="#">
          <img src="../../public/img/drop.svg" alt="#">
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import AppButton from "@/components/UI/app-button.vue";

export default {
  components: {AppButton},
  data() {

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

  .left-side {
    display: flex;
    flex-direction: row;

    a:not(:last-child) {
      margin-right: 25px;
    }

    a:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }

  .right-side > * {
    padding-right: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;

    .login-in {
      display: flex;

      width: 110px;
      height: 50px;

      justify-content: center;
      text-align: center;
      align-items: center;

      margin-right: 15px;
    }

    .wallet {
      background-color: #57595D;
      display: flex;

      padding: 15px;
      align-items: center;

      :first-child {
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }
    }

    .user-logo {
      margin-left: 15px;

      :first-child {
        margin-right: 9px;
      }
    }
  }
}
</style>