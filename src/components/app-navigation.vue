<template>
  <aside class="navigation-container">
    <a href="http:/localhost:8080/">
      <img src="/img/side-menu/MainLogo.svg" alt="" class="logo">
    </a>

    <div class="block">
      <a href="http:/localhost:8080/new" class="block-content">
        <img src="/img/side-menu/TicketsGame.png" alt="">
        Tickets game
      </a>

      <a href="http:/localhost:8080/new" class="block-content">
        <img src="/img/side-menu/Games.png" alt="">
        Games
      </a>

      <a href="http:/localhost:8080/new" class="block-content">
        <img src="/img/side-menu/LeaveDealer.png" alt="">
        Live Dealer
      </a>
    </div>

    <div class="block">
      <div class="block-content custom-social-categories">
        SOCIAL CATEGORIES
      </div>

      <a href="http:/localhost:8080/new" class="block-content">
        <img src="/img/telegram.png" alt="">
        Telegram
      </a>

      <a href="http:/localhost:8080/new" class="block-content">
        <img src="/img/vkontakte.png" alt="">
        Вконтакте
      </a>
    </div>

    <div class="block">
      <a href="http:/localhost:8080/new" class="block-content">
        <img src="/img/side-menu/notification.png" alt="">
        Уведомления
      </a>

      <a href="http:/localhost:8080/new" class="block-content">
        <img src="/img/side-menu/noMusic.png" alt="">
        Без звука
      </a>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.logo {
  width: 110px;
  height: 50px;
}

.navigation-container {
  @include fld-l;
  display: flex;
  flex-direction: column;

  max-width: 315px;
  height: 100%;

  color: white;
  padding: 40px 0 50px 80px;
  background-color: $clr-grey;
  overflow: auto;
}

.block {
  margin-top: 60px;

  &:last-child {
    margin-top: auto;
    bottom: 0;
  }

  a:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}

.block-content {
  display: flex;
  flex-direction: row;

  margin-top: 30px;

  img {
    margin-right: 25px;
    height: 20px;
    width: 20px;
  }
}

.custom-social-categories {
  color: $clr-no-active-link;
  font-size: 14px;
}
</style>