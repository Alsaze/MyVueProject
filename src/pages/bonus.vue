<template>
  <div class="bonus-page">
    <div class="bonus-page__block">
      <h3>Обратите внимание</h3>
      <p class="bonus-page__subtitle">Для получения бонусов необходимо</p>
      <div class="bonus-page__group">
        <div class="block-mini">
          <p>Вступить в группу Вконтакте</p>
          <AppButton
              background-color="red"
              :append-icon="IconVk"
              big
          >
            Подписаться
          </AppButton>
        </div>
        <div class="block-mini">
          <p>Вступить в групу Telegram</p>
          <AppButton
              background-color="red"
              :append-icon="IconTelegram"
              big
          >
            Подписаться
          </AppButton>
        </div>
        <div class="block-mini">
          <p>Привязать аккаунт телеграмма</p>
          <AppButton
              background-color="red"
              :append-icon="IconPlus"
              big
          >
            Подписаться
          </AppButton>
        </div>
      </div>
    </div>
    <div class="bonus-page__block">
      <h4 class="bonus-page__subtitle">Действующие бонусы</h4>
      <div class="bonus-page__group">
        <div class="block-medium">
          <div class="block-medium__title">
            Получить 15 монет
          </div>
          <div class="block-medium__subtitle">
            15 монет можно получить 1 раз в день
          </div>
          <AppButton
              background-color="red"
              medium
          >
            Авторизоваться
          </AppButton>
        </div>
        <div class="block-medium">
          <div class="block-medium__title">
            Получить 1 монету
          </div>
          <div class="block-medium__subtitle">
            1 монету можно получать каждые 5 минту с 10:00 до ):00 по МСК
          </div>
          <AppButton
              background-color="red"
              medium
          >
            Авторизоваться
          </AppButton>
        </div>
      </div>
    </div>
    <div class="bonus-page__block">
      <h4 class="bonus-page__subtitle">Единоразовые</h4>
      <div class="block-big">

      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/UI/app-button.vue";
import IconVk from "@/components/icons/IconVk.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconPlus from "@/components/icons/IconPlus.vue";

export default {
  name: "bonus",
  computed: {
    IconPlus() {
      return IconPlus
    },
    IconTelegram() {
      return IconTelegram
    },
    IconVk() {
      return IconVk
    }
  },
  components: {AppButton}
}
</script>

<style lang="scss">
.bonus-page {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;

  h3 {
    margin-bottom: 5px;
  }

  &__block {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__subtitle {
    margin-bottom: 30px;
  }

  &__group {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
}

.block-mini {
  width: 240px;
  height: 156px;

  padding: 20px;
  background: $clr-bg-2;
  @include txt-l;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}

.block-medium {
  padding: 20px;
  background: $clr-bg-2;
  width: 375px;
  height: 187px;
  position: relative;

  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__subtitle {
    @include txt-m;
  }

  button {
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 20px;
    position: absolute;
  }

  .block-big {
    width: 780px;
    height: 235px;
    padding: 20px;

    display: flex;
    flex-direction: row;
  }
}
</style>