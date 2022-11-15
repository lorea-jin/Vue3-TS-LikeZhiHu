<!-- input item -->
<template>
  <div class="validate-input-container col-sm-10" ref="valid">
    <input
      v-if="tag !== 'textarea'"
      type="text"
      class="form-control"
      @blur="validateInput"
      :value="modelValue"
      @input="updateVal"
      :class="{ 'is-invalid': validInfo.error }"
      v-bind="$attrs"
    />
    <textarea
      v-else
      cols="30"
      rows="10"
      :value="modelValue"
      @blur="validateInput"
      @input="updateVal"
      class="form-control"
      v-bind="$attrs"
      :class="{ 'is-invalid': validInfo.error }"
    ></textarea>
    <div id="emailHelp" class="form-text invalid-feedback" v-if="validInfo.error">{{ validInfo.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, onMounted } from 'vue'
import {emitter} from './ValidateForm.vue'
interface RuleProp {
  type: 'required' | 'email' | 'range' | 'custom'
  validator?: () => boolean
  min?: { message: string; length: number }
  max?: { message: string; length: number }
  message?: string
}
export type RulesProp = RuleProp[]
export type TagType = 'input' | 'textarea'
var emailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/

export default defineComponent({
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
    },
    tag: {
      type: String as PropType<TagType>,
      default: 'input',
    },
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const validInfo = reactive({
      val: props.modelValue || '',
      error: false,
      message: '',
    })

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(item => {
          let passed = true
          validInfo.message = item.message || ''
          switch (item.type) {
            case 'required':
              passed = validInfo.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(validInfo.val)
              break
            case 'range':
              const { min, max } = item
              if (min && validInfo.val.trim().length < min.length) {
                passed = false
                validInfo.message = min.message
              }
              if (max && validInfo.val.trim().length > max.length) {
                passed = false
                validInfo.message = max.message
              }
              break
            case 'custom':
              passed = item.validator ? item.validator() : true
              break
            default:
              break
          }
          return passed
        })
        validInfo.error = !allPassed
        return allPassed
      } else {
        return true
      }
    }

    const updateVal = (e: Event) => {
      validInfo.val = (e.target as HTMLInputElement).value
      emit('update:modelValue', validInfo.val)
    }

    const valid = ref(null)
    onMounted(() => {
      // 触发监听事件，传送验证Fn到form组件中
			emitter.emit('form-item-created',validInfo.val)
    })

    return { validateInput, validInfo, updateVal, valid }
  },
})
</script>

<style scoped lang="scss">
.form-text {
  text-align: left;
}
</style>
