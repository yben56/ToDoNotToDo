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
app.component('LangComp', LangComp)
import lang from '@/js/lang.js'
import LangComp from '@/components/LangComp.vue'

//Axios
import axios from 'axios'
app.config.globalProperties.$axios = axios

//Modal
import ModalComp from '@/components/ModalComp.vue'
app.component('ModalComp', ModalComp)

//Auth (Modal)
import LoginComp from '@/components/Auth/LoginComp.vue'
import SignupComp from '@/components/Auth/SignupComp.vue'
import LogoutComp from '@/components/Auth/LogoutComp.vue'
app.component('LoginComp', LoginComp)
app.component('SignupComp', SignupComp)
app.component('LogoutComp', LogoutComp)

//Btn (Modal)
import AddToDoComp from '@/components/AddToDoComp.vue'
app.component('AddToDoComp', AddToDoComp)

app.mount('#app')