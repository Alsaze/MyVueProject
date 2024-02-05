<template>
  <div class="divisions-page">
    <div class="divisions-info">
      <div class="divisions-info__header">
        <p>Дивизионы</p>
        <p class="divisions-info__text">Дивизионы присваиваются игрокам, которые пополняют счет ежемесячно на
          определенную сумму.
        </p>
        <div class="divisions-info__underline"></div>
        <p class="divisions-info__opportunities">Возможности</p>
      </div>

      <div class="divisions-info__table">
        <div class="division-item__field">Ежедневные награды</div>
        <div class="division-item__field">Доступ к переводу монет</div>
        <div class="division-item__field">Стандарт стикеры</div>
        <div class="division-item__field">Премиум стикеры</div>
        <div class="division-item__field">Показ в чате</div>
        <div class="division-item__field">Низкие комиссии для выплат</div>
      </div>
    </div>
    <div class="divisions-page__container">
      <Division
          title="Новичок"
          :dayleReward="true"
          subtitle="Дается всем"
          image="/division/beginner.png"/>
      <Division
          title="Бронза"
          :dayleReward="true"
          :access-transition="true"
          :standardStickers="true"
          subtitle="Пополни баланс на 300 ₽ в месяц"
          image="/division/bronze.png"
          active/>
      <Division
          title="Серебро"
          :dayleReward="true"
          :access-transition="true"
          :standardStickers="true"
          :premium-stickers="true"
          subtitle="Пополни баланс на 1 000 ₽ в месяц"
          image="/division/silver.png"/>
      <Division
          title="Золото"
          :dayleReward="true"
          :access-transition="true"
          :standardStickers="true"
          :premium-stickers="true"
          :show-chat="true"
          subtitle="Пополни баланс на 3 000 ₽ в месяц"
          image="/division/gold.png"/>
      <Division
          title="Бриллиант"
          :dayleReward="true"
          :access-transition="true"
          :standardStickers="true"
          :premium-stickers="true"
          :show-chat="true"
          :low-commissions="true"
          subtitle="Пополни баланс на 5 000 ₽ в месяц"
          image="/division/diamond.png"
      />
    </div>
  </div>
</template>
<script>
import Division from "@/components/UI/division.vue";
import BlockInfoText from "@/components/block-info-text.vue";
import IconCheck from "@/components/icons/IconCheck.vue";

export default {
  name: "divisions",
  components: {IconCheck, BlockInfoText, Division},
  data() {
    return {
      currentDivision: 'Новичок',
    }
  }
}
</script>

<style lang="scss">
.divisions-page {
  display: flex;
  flex-direction: row;
  padding: 60px;
  background: $clr-bg-light;

  .divisions-info {
    @include txt-l-b;
    padding: 20px 0;
    width: 100%;

    &__header {
      height: 205px;
    }

    &__text {
      @include btn-link-m;
      margin-block: 9px;
    }

    &__underline {
      border: 1px solid $clr-no-active-link;
    }

    &__opportunities {
      margin-top: 9px;
      margin-bottom: 30px;
      bottom: 0;
    }

    &__table {
      width: 100%;

      div {
        justify-content: left;
        padding: 10px 15px;
      }
    }
  }

  &__container {
    display: flex;
    flex-direction: row;
  }
}
</style>