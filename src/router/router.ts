import { createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'

const router=createRouter({
	history:createWebHistory(),
	routes:[
		{
      path: '/',
      name: 'home',
      component: Home
    },
		{
      path: '/login',
      name: 'login',
      component: Login
    },
]
})

export default router