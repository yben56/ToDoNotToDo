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

/*Components*/
//Lang
app.use(lang)
app.component('lang-comp', LangComp)
import lang from '@/js/lang.js'
import LangComp from '@/components/LangComp.vue'

//Axios
import axios from 'axios'
app.config.globalProperties.$axios = axios

//Modal
import ModalComp from '@/components/ModalComp.vue'
app.component('modal-comp', ModalComp)

//Auth
import LoginComp from '@/components/Auth/LoginComp.vue'
import SignupComp from '@/components/Auth/SignupComp.vue'
import LogoutComp from '@/components/Auth/LogoutComp.vue'
app.component('login-comp', LoginComp)
app.component('signup-comp', SignupComp)
app.component('logout-comp', LogoutComp)

//Pages
app.mount('#app')