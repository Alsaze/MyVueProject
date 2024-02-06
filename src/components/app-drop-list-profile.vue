<template>
  <teleport to="body">
    <div class="app-drop-list-profile" v-if="modelValue">
      <div>
        Player50339
      </div>
      <div>
        <AppButton
            :append-icon="IconBigArrowRight"
            background-color="red"
            @click="this.$emit('update:modelValue', false)"
        >
          <router-link to="/profile">
            В личный кабинет
          </router-link>
        </AppButton>
      </div>
      <div class="app-drop-list-profile-underline"></div>
      <div class="app-drop-list-profile-footer">
        <AppButton :icon="IconDynamicMute"/>
        <AppButton
            :icon="IconExitDoor"
            @click=exitAccount
        />
      </div>
    </div>

    <AppAccountExit
        v-model="accountExitShown"
    />
  </teleport>
</template>

<script>
import AppButton from "@/components/UI/app-button.vue";
import IconBigArrowRight from "@/components/icons/IconBigArrowRight.vue";
import IconExitDoor from "@/components/icons/IconExitDoor.vue";
import IconDynamicMute from "@/components/icons/IconDynamicMute.vue";
import AppAccountExit from "@/components/app-account-exit.vue";

export default {
  computed: {
    IconDynamicMute() {
      return IconDynamicMute
    },
    IconExitDoor() {
      return IconExitDoor
    },
    IconBigArrowRight() {
      return IconBigArrowRight
    }
  },
  components: {AppAccountExit, AppButton},
  props: {
    modelValue: {
      type: Boolean,
    }
  },
  methods: {
    exitAccount() {
      this.$store.commit('setIsAccountExitShown', true);
      this.$emit('update:modelValue', false);
    }
  }
}
</script>
<style lang="scss" scoped>
.app-drop-list-profile {
  position: fixed;
  z-index: 1000;
  top: 20%;
  left: 75%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid $clr-red-active;
  background-color: $clr-grey;
  padding: 20px;
  gap: 11px;

  .app-drop-list-profile-underline {
    border: 1px solid #57595D;
    width: 100%;
  }

  .app-drop-list-profile-footer {
    display: flex;
    flex-direction: row;
    gap: 22px;
  }
}
</style>