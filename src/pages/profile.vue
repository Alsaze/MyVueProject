<template>
  <div class="profile-page">
    <h1 class="profile-page__title">Личный кабинет</h1>

    <div class="profile-page__content">
      <ProfileSection title="Профиль">
        <template #header>
          <AppButton
              @click=appAccountExit
          >
            Выйти
          </AppButton>
        </template>

        <div class="profile-card">
          <img src="/img/userface.svg" alt="Avatar" class="profile-card__avatar">

          <div>
            <p class="profile-card__username">Player50339</p>

            <div class="user-id">
              <span class="user-id__label">
                ID
              </span>

              <div class="user-id__value">
                <span>298456</span>
                <IconCopy/>
              </div>
            </div>
          </div>
        </div>
      </ProfileSection>

      <ProfileSection title="Дивизион">
        <div class="profile-page__division-cards">
          <DivisionCard title="Новичок" image="/division/beginner.png">
            Будет установлен в следующем месяце
          </DivisionCard>

          <DivisionCard title="Бронза" image="/division/bronze.png">
            Пополни баланс на <strong>300 ₽</strong> до следующего месяца
          </DivisionCard>

          <DivisionCard title="Серебро" image="/division/silver.png">
            Пополни баланс на <strong>500 ₽</strong> до следующего месяца
          </DivisionCard>

          <DivisionCard title="Золото" image="/division/gold.png">
            Пополни баланс на <strong>1000 ₽</strong> до следующего месяца
          </DivisionCard>

          <DivisionCard title="Бриллиант" image="/division/diamond.png">
            Пополни баланс на <strong>5000 ₽</strong> до следующего месяца
          </DivisionCard>
        </div>
      </ProfileSection>
    </div>
    <AppAccountExit
        v-model="accountExitShown"/>
  </div>
</template>

<script>
import ProfileSection from "@/components/profile-section.vue";
import AppButton from "@/components/UI/app-button.vue";
import IconCopy from "@/components/icons/IconCopy.vue";
import DivisionCard from "@/components/division-card.vue";
import AppAccountExit from "@/components/app-account-exit.vue";
import appAccountExit from "@/components/app-account-exit.vue";

export default {
  components: {AppAccountExit, DivisionCard, IconCopy, AppButton, ProfileSection},
  methods: {
    appAccountExit() {
      this.$store.commit('setIsAccountExitShown', true);
    }
  }
}
</script>

<style lang="scss">
.profile-page {

  &__title {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 40px 60px;
    background-color: $clr-bg-2;
  }

  &__division-cards {
    display: flex;
    justify-content: space-between;
  }
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 24px;

  &__avatar {
    width: 68px;
    height: 79px;
  }

  &__username {
    @include fld-l;

    text-transform: uppercase;
    margin-bottom: 5px;
  }
}

.user-id {
  &__label {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin-right: 24px;
    vertical-align: middle;
  }

  &__value {
    @include fld-l;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background-color: $clr-grey;
    padding: 5px 6px;
    width: 145px;
    vertical-align: middle;
  }
}

.division-card {
  width: 210px;
  text-align: center;

  &__image {
    width: 154px;
    height: 135px;
    object-fit: none;
    object-position: center;
    margin-bottom: 9px;
  }

  &__title {
    margin-bottom: 9px;
  }

  &__description {
    @include txt-m;

    strong {
      color: $clr-red-active;
      white-space: nowrap;
    }
  }
}
</style>