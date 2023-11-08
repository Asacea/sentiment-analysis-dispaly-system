
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(DataVVue3)
app.mount('#app')
