import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import microApp from '@micro-zoe/micro-app'

import App from './App.vue'
import router from './router'

microApp.start()
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
