<template>
  <div class="division-card">
    <img :src="image" alt="" class="division-card__image">

    <h6 class="division-card__title">{{title}}</h6>

    <div class="division-card__description">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  props: ['image', 'title']
}
</script>