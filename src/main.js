
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import {createPersistedState} from'pinia-persistedstate-plugin'

const app = createApp(App)

const pinia = createPinia();
const persist = createPersistedState()
pinia.use(persist)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(DataVVue3)
app.mount('#app')