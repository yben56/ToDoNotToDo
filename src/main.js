import { createApp } from 'vue'
import App from './App.vue'

//App.scss
import '@/assets/styles/App.scss'

//Bootstrap 5.3.2
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

//Routes
import router from '@/js/routes'
app.use(router)

//Auth
import { authentication, auth } from '@/js/auth'
app.use(authentication)

//Lang
app.use(lang)
app.component('LangComp', LangComp)
import lang from '@/js/lang.js'
import LangComp from '@/components/LangComp.vue'

//Axios (ajax)
import axios from 'axios'
app.config.globalProperties.$axios = axios

//Modals
import { comps } from '@/js/modal.js'
Object.entries(comps).forEach(([name, comp]) => {
    app.component(name, comp)
})

app.mount('#app')