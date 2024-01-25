<template>
  <div class="app">
    <AppNavigation/>
    <AppHeader/>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/app-header.vue";
import AppNavigation from "@/components/app-navigation.vue";

export default {
  components: {AppHeader, AppNavigation},
  data() {
    return {
      dropListShown: false,
      accountExitShown: false,
      authorizationShown: false,
    }
  },
}
</script>

<style lang="scss">
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

header {
  grid-area: head;
}

aside {
  grid-area: nav;
}

main {
  grid-area: main;

  background-color: $clr-grey;
  position: relative;
  display: flex;
}
</style>