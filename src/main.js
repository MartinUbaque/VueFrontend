import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersist)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(pinia)

app.mount('#app')

