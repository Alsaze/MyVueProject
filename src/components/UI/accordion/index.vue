<template>
  <div
      class="ui-accordion"
      :class="{
    'is-disabled': disabled
    }"
  >
    <slot/>
  </div>
</template>

<script setup>
import {provide, ref, watch, toRef} from 'vue'
import {castArray} from 'lodash-es'

defineOptions({
  name: 'UiAccordion',
})

const props = defineProps({
  multiple: Boolean,
  modelValue: {},
  disabled: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const activeItems = ref(castArray(props.modelValue))

function setActiveItems(_activeItems) {
  activeItems.value = _activeItems
  const value = !props.multiple ? activeItems.value[0] : activeItems.value

  emit('update:modelValue', value)
}

function handleItemClick(id) {
  if (props.disabled)
    return

  if (!props.multiple) {
    setActiveItems([activeItems.value[0] === id ? '' : id])
  } else {
    const _activeItems = [...activeItems.value]
    const index = _activeItems.indexOf(id)

    if (index > -1)
      _activeItems.splice(index, 1)
    else
      _activeItems.push(id)

    setActiveItems(_activeItems)
  }
}

function isActive(id) {
  return activeItems.value.includes(id)
}

watch(
    () => props.modelValue,
    value => (activeItems.value = castArray(value)),
    {deep: true},
)

provide('UI_ACCORDION', {
  activeItems,
  handleItemClick,
  isActive,
  inactiveIcon: toRef(props, 'inactiveIcon'),
  activeIcon: toRef(props, 'activeIcon'),
  disabled: toRef(props, 'disabled'),
})
</script>

<style lang="scss">
@use 'styles';
</style>
