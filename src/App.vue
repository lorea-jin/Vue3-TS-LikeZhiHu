<template>
  <globalHeader :user="userInfo"></globalHeader>
  <router-view></router-view>

  <footer class="text-center py-4 text-secondary bg-light mt-6">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">© 2020 者也专栏</li>
        <li class="list-inline-item">课程</li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
</template>

<script setup lang="ts">
import globalHeader, { UserProps } from './components/globalHeader.vue'

import { ref, onMounted } from 'vue'

const userInfo: UserProps = {
  isLogin: true,
  id: 6688,
  name: 'jin',
}

onMounted(() => {})
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
