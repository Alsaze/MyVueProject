<template>
  <div class="profile-section">
    <div class="profile-section__header">
      <h4 class="profile-section__title">
        {{ title }}
      </h4>

      <slot name="header"/>
    </div>

    <slot/>
  </div>
</template>
<script>
export default {
  name: 'ProfileSection',
  props: ['title']
}
</script>
<style lang="scss">

.profile-section {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid $clr-no-active-link;
    margin-bottom: 20px;
  }

  &__title {
    @include txt-l-b;

    color: $clr-alt-text;
  }
}

</style>