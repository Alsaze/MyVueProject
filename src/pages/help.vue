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
        <BlockInfo title="Время работы">
          <BlockInfoText
              title="Понедельник-четверг"
              subtitle="с 12:00 до 00:00"
          />
          <BlockInfoText
              title="Пятница-воскресенье"
              subtitle="с 12:00 до 06:00"
          />
        </BlockInfo>
        <BlockInfo title="Поддержка клиентов ( Вконтакте )">
          <BlockInfoText
              title="Онлайн чат в группе ВКонтакте:"
              subtitle="15 минут"
          />
          <AppButton
              width="208px"
              common
              background-color="red"
              :append-icon="IconBigArrowRight"
          >
            <a href="https://vk.com/id457416627">Перейти в группу</a>
          </AppButton>
        </BlockInfo>
      </div>

      <ProfileSection title="Ответы на популярные вопросы">
        <div class="help-page__accordion">
          <UiAccordion>
            <UiAccordionItem :icon="IconArrow" title="Что это за сайт?">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ab aut ducimus neque optio velit voluptas! Ea earum eveniet illo itaque iure placeat
              quaerat repellendus tempore.
            </UiAccordionItem>

            <UiAccordionItem :icon="IconArrow" title="Как здесь играть?"> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Autem magnam, nam praesentium vel veritatis voluptatibus? Aspernatur, commodi doloremque
              excepturi id impedit laborum minus molestiae quia!
            </UiAccordionItem>

            <UiAccordionItem :icon="IconArrow" title="Что такое “Промокод”?">Промокод - код, который пользователь может
              ввести для
              получения денежного бонуса. Ввести промокод можно в разделе “Бонусы”. Как правило, промокоды публикуются
              администрацией сайта в официальном Telegram канале - <a href="https://t.me/drgnmoney">https://t.me/drgnmoney</a>
            </UiAccordionItem>

            <UiAccordionItem :icon="IconArrow" title="Как пополнить баланс?">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A architecto assumenda consequatur cupiditate delectus, deserunt enim fugit id labore
              laborum officia perspiciatis recusandae, repudiandae sit!
            </UiAccordionItem>

            <UiAccordionItem :icon="IconArrow" title="Как вывести средства?">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cumque delectus dicta fuga nisi porro rem vel. Commodi cum distinctio doloremque est hic
              molestias nisi praesentium!
            </UiAccordionItem>

            <UiAccordionItem :icon="IconArrow" title="Я вывел деньги, но они не пришли">Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. A aliquam asperiores aspernatur at delectus enim eum facilis, fugit harum
              illo illum nesciunt possimus, rem sequi!
            </UiAccordionItem>

            <UiAccordionItem :icon="IconArrow" title="Существуют ли на сайте комиссии при пополнении и выводе?">Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur facere omnis pariatur quae quam quo
              rerum sunt voluptatem. Dicta facere ipsam ipsum suscipit totam.
            </UiAccordionItem>

            <UiAccordionItem :icon="IconArrow" title="Что такое “Реферальная система”?">Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquam consequuntur, et eum excepturi iusto libero magni, maxime, optio
              praesentium rem tempore totam veritatis vitae voluptate.
            </UiAccordionItem>
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
import AppButton from "@/components/UI/app-button.vue";
import BlockInfoText from "@/components/block-info-text.vue";
import IconBigArrowRight from "@/components/icons/IconBigArrowRight.vue";

export default defineComponent({
  computed: {
    IconBigArrowRight() {
      return IconBigArrowRight
    },
    IconArrow() {
      return IconArrow
    }
  },
  components: {
    BlockInfoText,
    AppButton, UiAccordionItem, UiAccordion, AppAccordion, ProfileSection, BlockInfo, IconInformation
  }
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