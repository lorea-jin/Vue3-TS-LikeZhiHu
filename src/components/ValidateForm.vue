<!-- form组件，功能：
		1. 默认提交按钮
		2.循环验证每个表格项  how? 把每个input实例中的验证方法收集过来
-->
<template>
  <form action="">
    <slot ref="validSlotRef"></slot>

    <div @click.prevent="handleSubmit">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
type validFn = () => Boolean
export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit-form'],
  setup(props, { emit }) {
    const validSlotRef = ref(null)
    const FnArr = ref<validFn[]>([])
    const handleSubmit = () => {
      // 处理提交逻辑，需求：获取slot中所有input验证的结果，发送给父组件app，vue
      // 步骤1：input组件中 手动触发监听器
      // 步骤2：form组件中加监听器，
      if (FnArr) {
        const result = FnArr.value.map(item => item()).every(val => val)
        emit('submit-form', result)
      }
    }

	
		// 收集的验证方法的数组
    const callback = (fn: validFn) => {
      if (fn) {
        FnArr.value.push(fn)
      }
    }
    emitter.on('form-item-created', callback)

    onUnmounted(() => {
      emitter.off('form-item-created')
      FnArr.value = []
    })
    return {
      validSlotRef,
      handleSubmit,
      FnArr,
    }
  },
})
</script>

<style scoped></style>
