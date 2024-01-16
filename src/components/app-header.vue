<template>
  <div class="app-header">
    <div class="left-side">
      <a href="http://localhost:8080/new">Главная</a>
      <a href="http://localhost:8080/new">Помощь</a>
      <a href="http://localhost:8080/new">Бонусы</a>
      <a href="http://localhost:8080/new">Дивизионы</a>
    </div>
    <div class="right-side">
      <button class="login-in">
        Login in
      </button>
      <app-button>
        Sign in
      </app-button>
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

  .right-side {
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
  }
}
</style>