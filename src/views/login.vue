<template>
  <ValidateForm @submit-form="onSubmitForm">
    <div class="row mb-3">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <ValidateInput placeholder="请输入您的邮箱地址" type="text" :rules="emailRules" v-model="mailVal" ref="validRef" />
    </div>
    <div class="row mb-3">
      <label for="inputPsw" class="col-sm-2 col-form-label">password</label>
      <ValidateInput placeholder="请输入您的密码" type="password" :rules="pswRules" v-model="pswVal" />
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </template>
  </ValidateForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { ref } from 'vue'
export default defineComponent({
  components: { ValidateForm, ValidateInput },
  setup() {

    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' },
    ]

    const pswRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      {
        type: 'range',
        min: { message: '你的密码至少包括六位，不能含有空格', length: 6 },
        max: { message: '你的密码不能超过10位，不能含有空格', length: 10 },
      },
    ]

    let mailVal = ref('')
    let pswVal = ref('')
    let validRef = ref<any>(null)

    // 提交表单事件，拿到是否验证通过的结果
    const onSubmitForm = (val: boolean) => {
      console.log('最终结果：' + val)
    }

    return {
      emailRules,
      pswRules,
      pswVal,
      mailVal,
      validRef,
      onSubmitForm,
    }
  },
})
</script>

<style scoped></style>
