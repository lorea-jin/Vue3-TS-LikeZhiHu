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
import { defineComponent, onMounted, ref } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit-form'],
  setup(props, { emit }) {
    const validSlotRef = ref(null)

    const handleSubmit = () => {
      //处理提交逻辑
      // todo： 1.获取slot中所有input验证的结果，然后发给父组件
      // form中加监听器，
      // input组件中 手动触发监听器
	
			
      emit('submit-form', true)
    }

		const callback = (val:string) => {
			console.log(val);
			
		}
		emitter.on('form-item-created', callback)

    return {
      validSlotRef,
      handleSubmit,
    }
  },
})
</script>

<style scoped></style>
