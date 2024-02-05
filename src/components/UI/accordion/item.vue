<template>
  <div
      class="ui-accordion-item"
      :class="{
        'is-focused': focused,
        'is-active': isActive,
        'is-disabled': disabled
    }"
  >
    <button
        class="ui-accordion-item__head"
        type="button"
        @focus="focused = true"
        @blur="focused = false"
        @click="handleClick"
        @keydown.space.enter.stop.prevent="handleClick"
    >
      <slot name="title">
        <h3 class="ui-accordion-item__title">
          {{ title }}
        </h3>
      </slot>
      <Component
          class="ui-accordion-item__icon"
          :is="icon"
      />
    </button>

    <UiAccordionTransition>
      <div
          v-show="isActive"
          class="ui-accordion-item__wrapper"
      >
        <div class="ui-accordion-item__content">
          <slot/>
        </div>
      </div>
    </UiAccordionTransition>
  </div>
</template>

<script setup>
import {uniqueId} from 'lodash-es'
import {defineProps, computed, inject, ref} from 'vue'
import UiAccordionTransition from './transition.vue'

defineOptions({
  name: 'UiAccordionItem',
})

const props = defineProps({
  id: {
    type: [String, Number],
    default: () => uniqueId()
  },
  title: '',
  icon: {},
})

const accordion = inject('UI_ACCORDION')

const focused = ref(false)

const isActive = computed(() => accordion?.isActive(props.id) ?? false)
const disabled = computed(() => accordion?.disabled.value ?? false)

function handleClick() {
  accordion?.handleItemClick(props.id)
}
</script>
