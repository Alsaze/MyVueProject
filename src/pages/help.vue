<template>
  <div class="help-page">
    <h1 class="profile-page__title">Помощь</h1>

    <div class="profile-page__content">
      <div class="warning">
        <IconInformation/>
        <p>
          Возникли вопросы? Ознакомьтесь с ответами на самые популярные вопросы, связанные с работой сайта SlotGames.
          Скорее всего, Вы найдете ответ на свой вопрос здесь. Если вы не нашли ответ на свой вопрос – обратитесь в нашу
          службу поддержки. Вам с удовольствием помогут
        </p>
      </div>
      <div class="help-page__info-container">
        <block-info
            slot-one="Понедельник-четверг"
            sub-slot-one="с 12:00 до 00:00"
            slot-two="Пятница-воскресенье"
            sub-slot-two="с 12:00 до 06:00"
        />
        <block-info
            slot-one="Онлайн чат в группе ВКонтакте:"
            sub-slot-one="15 минут"
            button="true"
        />
      </div>
      <ProfileSection title="Ответы на популярные вопросы">
        <div class="help-page__accordion">
          <UiAccordion>
            <UiAccordionItem title="Item 1">Test 1</UiAccordionItem>
            <UiAccordionItem title="Item 2">Test 2</UiAccordionItem>
            <UiAccordionItem title="Item 3">Test 3</UiAccordionItem>
          </UiAccordion>
        </div>
      </ProfileSection>
    </div>
  </div>
</template>
<script>

import {defineComponent} from "vue";
import IconInformation from "@/components/icons/IconInformation.vue";
import BlockInfo from "@/components/block-Info.vue";
import ProfileSection from "@/components/profile-section.vue";
import AppAccordion from "@/components/UI/app-accordion.vue"
import IconArrow from "@/components/icons/IconArrow.vue";
import UiAccordion from "@/components/UI/accordion/index.vue";
import UiAccordionItem from "@/components/UI/accordion/item.vue";

export default defineComponent({
  computed: {
    IconArrow() {
      return IconArrow
    }
  },
  components: {UiAccordionItem, UiAccordion, AppAccordion, ProfileSection, BlockInfo, IconInformation}
})
</script>
<style lang="scss">
.warning {
  display: flex;
  flex-direction: row;
  gap: 20px;

  padding: 15px;
  background-color: $clr-grey;
}

.help-page {

  &__info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }

  &__accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>