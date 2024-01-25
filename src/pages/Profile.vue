<template>
  <div class="profile-page">
    <h1 class="profile-page__title">Личный кабинет</h1>

    <div class="profile-page__content">
      <ProfileSection title="Профиль">
        <template #header>
          Выйти
        </template>

        Default slot
      </ProfileSection>

      <ProfileSection title="Дивизион"/>
    </div>
  </div>
</template>

<script>
import ProfileSection from "@/components/profile-section.vue";
import AppButton from "@/components/UI/app-button.vue";

export default {
  components: {AppButton, ProfileSection}
}
</script>

<style lang="scss">
.profile-page {
  margin-right: 80px;

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
}

</style>