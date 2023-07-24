

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPLUS from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPLUS)
app.use(createPinia())
app.use(router)

app.mount('#app')