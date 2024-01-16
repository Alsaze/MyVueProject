<template>
  <div class="app">
    <!--    <router-view></router-view>-->
    <AppNavigation></AppNavigation>
    <AppHeader></AppHeader>
    <main>

    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/app-header.vue";
import AppNavigation from "@/components/app-navigation.vue";

export default {
  components: {AppHeader, AppNavigation}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: white;
}

.app {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template:
    [header-left] "nav head" 105px [header-right]
    [main-left] "nav main" 1fr [main-right]
    / 315px 1fr;
}

AppHeader {
  grid-area: head;
}

AppNavigation {
  grid-area: nav;
}

main {
  background-color: black;
  grid-area: main;
}
</style>