<!-- DropdownItem 放选项 -->
<template>
  <li class="dropdown-item dropdown-option" :class="{ disabled: disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.dropdown-item {
  color: #0d6efd;
  &:hover {
    cursor: pointer;
  }
}
.disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
