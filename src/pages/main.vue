<template>
  <div class="main-page">
    <div class="card-game-large">
      <p class="card-game-large__title">
        регулярные акции<br>
        и раздачи
      </p>
      <div class="card-game-large__subtitle">
        <div>
          <IconTelegram class="card-game-large__img"/>
          <span>ЛОВИ ПРОМОКОДЫ В</span>
        </div>
        <p class="card-game-large__text">TELEGRAM</p>
      </div>
      <AppButton
          common
          background-color="red"
          :append-icon="IconBigArrowRight"
          style="width: 195px;"
      >
        Перейти
      </AppButton>
    </div>

    <h5>Провайдеры</h5>

    <div class="main-page__big-container">
      <div class="card-game-big"
           style="background: url('/img/main-page/bg-netent.png');
               background-size: cover;"
      >
        <div class="card-game-big__title">
          <h4>Игровой провайдер</h4>
          <img src="/img/main-page/logo-netent.png" alt="logo">
        </div>
        <div class="card-game-big__footer">
          <div class="card-game-big__footer-image">
            <img src="/img/main-page/freya-logo.png" alt="#">
            <img src="/img/main-page/street-logo.png" alt="#">
          </div>
          <div class="card-game-big__footer-options">
            804 игроков
            <AppButton
                common
                background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>
      </div>

      <div class="card-game-big"
           style="background: url('/img/main-page/bg-egt.jpg');
               background-size: cover;">
        <div class="card-game-big__title">
          <h4>Игровой провайдер</h4>
          <img src="/img/main-page/logo-egt.png" alt="logo">
        </div>
        <div class="card-game-big__footer">
          <div class="card-game-big__footer-image">
            <img src="/img/main-page/fat-logo.png" alt="#">
            <img src="/img/main-page/safari-logo.png" alt="#">
          </div>
          <div class="card-game-big__footer-options">
            206 игроков
            <AppButton
                common
                background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>
      </div>
    </div>

    <div class="card-game-medium-container">
      <div class="card-game-medium-container-row">
        <div class="card-game-medium"
             style="background: url('/img/main-page/bg-play.jpg');
               background-size: cover;">
          <div class="card-game-medium__title">
            <h6>Игровой провайдер</h6>
            <img src="/img/main-page/logo-play.png" alt="#">
          </div>
          <div class="card-game-medium__footer">
            16 игроков
            <AppButton
                common background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>

        <div class="card-game-medium"
             style="background: url('/img/main-page/bg-greentube.jpg');
               background-size: cover;">>
          <div class="card-game-medium__title">
            <h6>Игровой провайдер</h6>
            <img src="/img/main-page/logo-greentube.png" alt="#">
          </div>
          <div class="card-game-medium__footer">
            16 игроков
            <AppButton
                common background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>

        <div class="card-game-medium"
             style="background: url('/img/main-page/bg-tiger.jpg');
               background-size: cover;">
          <div class="card-game-medium__title">
            <h6>Игровой провайдер</h6>
            <img src="/img/main-page/logo-tiger.png" alt="#">
          </div>
          <div class="card-game-medium__footer">
            16 игроков
            <AppButton
                common background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>
      </div>
      <div class="card-game-medium-container-row">
        <div class="card-game-medium"
             style="background: url('/img/main-page/bg-igrosoft.png');
               background-size: cover;">
          <div class="card-game-medium__title">
            <h6>Игровой провайдер</h6>
            <img src="/img/main-page/logo-igrosoft.png" alt="#">
          </div>
          <div class="card-game-medium__footer">
            16 игроков
            <AppButton
                common background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>

        <div class="card-game-medium"
             style="background: url('/img/main-page/bg-belatra.jpg');
               background-size: cover;">>
          <div class="card-game-medium__title">
            <h6>Игровой провайдер</h6>
            <img src="/img/main-page/logo-belatra.png" alt="#">
          </div>
          <div class="card-game-medium__footer">
            16 игроков
            <AppButton
                common background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>

        <div class="card-game-medium"
             style="background: url('/img/main-page/bg-ezugi.jpg');
               background-size: cover;">
          <div class="card-game-medium__title">
            <h6>Игровой провайдер</h6>
            <img src="/img/main-page/logo-ezugi.png" alt="#">
          </div>
          <div class="card-game-medium__footer">
            16 игроков
            <AppButton
                common background-color="red"
                :append-icon="IconBigArrowRight"
            >
              Играть
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppButton from "@/components/UI/app-button.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconBigArrowRight from "@/components/icons/IconBigArrowRight.vue";

export default {
  computed: {
    IconBigArrowRight() {
      return IconBigArrowRight
    }
  },
  components: {IconTelegram, AppButton},
  data() {

  }
}
</script>

<style lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__big-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  &__medium-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-bottom: 30px;
  }

  .card-game-medium-container-row {
    display: flex;
    flex-direction: row;

    margin-bottom: 30px;
    gap: 20px;
  }
}

.card-game-large {
  background-image: url("../../public/img/main-page/blockLargeBG.png");
  width: 100%;
  height: 488px;
  background-position: center;
  padding: 40px 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__title {
    color: $clr-alt-text;
    @include txt-m;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 36px;
    font-weight: 500;

    span {
      vertical-align: middle;
    }
  }

  &__img {
    margin-right: 20px;
    color: red;

    width: 34px;
    height: 34px;

    vertical-align: middle;
  }

  &__text {
    font-size: 96px;
    font-weight: 700;
  }
}

.card-game-big {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 80px;
  flex: 1;
  height: 405px;

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__footer-image {
    display: flex;
    gap: 20px;
  }

  &__footer-options {
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-block: auto;
  }
}

.card-game-medium {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 60px 40px;
  height: 280px;
  flex: 1;

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
  }

  &__footer {
    display: flex;
    gap: 17px;
    align-items: center;
    margin-left: auto;
  }
}
</style>