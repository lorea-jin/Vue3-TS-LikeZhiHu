<template>
	<globalHeader :user="userInfo"></globalHeader>

	<ValidateForm @submit-form="onSubmitForm"  >
		<div class="row mb-3">
			<label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
			<ValidateInput placeholder="请输入您的邮箱地址" type="text" :rules="emailRules" v-model="mailVal"  ref="validRef"/>
		</div>
		<div class="row mb-3">
			<label for="inputPsw" class="col-sm-2 col-form-label">password</label>
			<ValidateInput placeholder="请输入您的密码" type="password" :rules="pswRules" v-model="pswVal" />
		</div>
		<template #submit>
			<button type="submit" class="btn btn-primary">Sign in</button>
		</template>
	</ValidateForm>

	<!-- <ColumnList :list="testData" /> -->
</template>

<script setup lang="ts">
import ColumnList, { ColumnPropsType } from './views/ColumnList.vue'
import globalHeader, { UserProps } from './components/globalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'
import { ref, onMounted } from 'vue'
const testData: ColumnPropsType[] = [
	{
		id: 1,
		title: 'test1的专栏',
		description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
		avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
	},
	{
		id: 2,
		title: 'test2的专栏',
		description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
		avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
	},
	{
		id: 3,
		title: 'test2的专栏',
		description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
		avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
	},
	{
		id: 4,
		title: 'test2的专栏',
		description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
		avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
	},
]

const userInfo: UserProps = {
	isLogin: true,
	id: 6688,
	name: 'jin',
}

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


let mailVal = ref('123@qq.com')
let pswVal = ref('666666')
let validRef = ref<any>(null)

const onSubmitForm = (val: boolean) => {
	//提交后做一些事情...
	// console.log(validRef.value.validateInput());
}

onMounted(() => {

})

</script>
<style scoped lang="scss">
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

li {
	list-style: none;
}
</style>
