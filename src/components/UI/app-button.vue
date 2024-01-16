<template>
  <button class="app-button">
    Sign in
  </button>
</template>
<script>
export default {
  name: 'AppButton',
}
</script>
<style lang="scss" scoped>
.app-button {
  min-width: 110px;
  height: 50px;

  background-color: $clr-red-active;
  color: white;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
</style>