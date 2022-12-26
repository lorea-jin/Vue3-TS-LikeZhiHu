<template>
	<!-- 列表 -->
	<div class="row">
    <div v-for="column in list" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img  :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3" >
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnPropsType {
	id: number,
	title: string,
	description: string,
	avatar: string
}
export default defineComponent({
	name: 'ColumnList',
	props: {
		list: {
			type: Array as PropType<ColumnPropsType[]>,
			required: true,
		},
	},

})
</script>

<style  scoped>
li {
	padding: 20px;
	height: 220px;
	width: 200px;
	border: 1px solid red;

}

img {
	margin: auto;
	width: 50px;
	border-radius: 50%;
}

h3 {
	margin: 10px 0;
}

p {
	line-clamp: 2;
	word-break: break-all;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	/* 这里是超出几行省略 */

	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
	height: 50px;
	margin: 10px 0;
}

a {
	margin-top: 10px;
	padding: 8px;
}
</style>