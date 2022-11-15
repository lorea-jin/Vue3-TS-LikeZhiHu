<template>
	<nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
		<a class="navbar-brand" href="#">者也专栏</a>
		<ul v-if="!user.isLogin" class="list-inline mb-0">
			<li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
			<li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
		</ul>
		<ul v-else class="list-inline mb-0">
			<li>
				<dropdown title="666">
					<DropdownItem >新建文章</DropdownItem>
					<DropdownItem disabled>管理账户</DropdownItem>
					<DropdownItem>退出登录</DropdownItem>
				</dropdown>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import dropdown from './Dropdown.vue'
import DropdownItem from './Dropdown-Item.vue';
import { defineComponent, PropType } from 'vue'
export interface UserProps {
	isLogin: boolean;
	name?: string;
	id?: number;
}
export default defineComponent({
	components: { dropdown, DropdownItem },
	name: 'GlobalHeader',
	props: {
		user: {
			type: Object as PropType<UserProps>,
			required: true
		}
	}
})
</script>

