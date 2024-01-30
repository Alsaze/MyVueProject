<template>
  <div class="accordion">
    <label>
      <button @click="show" class="accordion-head">
      <span class="accordion-title">
        {{ title }}
      </span>
        <slot name="icon">
          <Component
              :is="icon"
              :class="`icon ${rotate ? 'rotate' : ''}`"
          />
        </slot>
      </button>
    </label>
    <div v-if="this.isActive" class="accordion-content">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      rotate: false,
    }
  },
  name: "app-drop-down",
  props: {
    title: {},
    text: {},
    icon: {
      required: true,
    },
  },
  methods: {
    show() {
      this.isActive = !this.isActive;
      this.rotate = !this.rotate;
    }
  },
}
</script>

<style lang="scss" scoped>
.accordion {
  background-color: $clr-bg-light;
  width: 100%;

  .accordion-head {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include txt-l-b;
  }

  .accordion-content {
    margin-top: 20px;
    @include txt-m;
    padding: 0 20px 20px 20px;

    span {
      color: red;
    }
  }
}

.rotate {
  transition: .7s;
  transform: rotate(180deg);
}
</style>