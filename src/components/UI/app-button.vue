<template>
  <button
      :class="['btn',{'btn_common': common},{'btn_outside': outside},{'btn_icon':icon},{'btn_prependIcon':prependIcon},{'btn_appendIcon':appendIcon},{'btn_big':big},{'btn_medium':medium}]"
      :style="{color: color, background: backgroundColor, width: width, height: height}"
  >
    <slot v-if="prependIcon" name="prependIcon">
      <Component :is="prependIcon">
      </Component>
      <slot/>
    </slot>

    <slot v-if="appendIcon" name="appendIcon">
      <slot/>
      <Component :is="appendIcon">
      </Component>
    </slot>

    <slot v-if="icon" name="icon">
      <Component :is="icon"/>
    </slot>

    <slot v-if="!appendIcon && !prependIcon && !icon">
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {},
    backgroundColor: {},
    width: {},
    height: {},
    common: {
      type: Boolean,
      default: false
    },
    outside: {
      type: Boolean,
      default: false
    },
    icon: {},
    prependIcon: {},
    appendIcon: {},
    big: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
  },
  name: 'app-button',
  data() {
    return {
      activeColor: 'red'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: .2s;

  &_common {
    width: 110px;
    height: 50px;
  }

  &_outside {
    border: 1px solid $clr-red-active;
    background-color: transparent;
  }

  &_prependIcon {
    padding: 10px;
    gap: 10px;
  }

  &_appendIcon {
    padding: 10px;
    gap: 10px;
  }

  &_big {
    padding: 15px;
  }

  &_medium {
    padding: 10px;
  }
}
</style>