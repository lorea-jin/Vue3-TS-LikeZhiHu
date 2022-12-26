import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './style/index.css'
import router from './router/router.js'

const app = createApp(App)
app.use(router)

app.mount('#app')