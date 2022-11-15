<template>
  <div class="dropdown" ref="DropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
      {{ title }}
    </a>
    <ul class="dropdown-menu" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import useClickOutside from '../hooks/useClickOutside'
import { defineComponent, onMounted, onUnmounted, ref, Ref, watch } from 'vue'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }

    // 处理是否点击在外的fn
		const DropdownRef = ref<HTMLElement | null>(null)

		
    const isOutside = useClickOutside(DropdownRef)

    watch(isOutside, () => {
      if (isOpen.value && isOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      DropdownRef,
    }
  },
})
</script>

<style lang="scss">
.dropdown-menu {
  display: block;
}
</style>
