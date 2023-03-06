import { createApp } from 'vue'
import App from './App.vue'
import { createVfm } from 'vue-final-modal'
import router from './router'
import 'vue-final-modal/style.css'


const vfm = createVfm()
createApp(App).use(router).use(vfm).mount('#app')
