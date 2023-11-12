import { createApp } from 'vue'
import App from './App.vue'

//App.scss
import './assets/styles/App.scss'

//Bootstrap 5.3.2
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

//Lang
app.use(lang)
app.component('lang-comp', LangComp)
import lang from './js/lang.js'
import LangComp from './components/LangComp.vue'

//Modal
import ModalComp from './components/ModalComp.vue'
app.component('modal-comp', ModalComp)

//Auth
import LoginComp from './components/Auth/LoginComp.vue'
import SignupComp from './components/Auth/SignupComp.vue'
app.component('login-comp', LoginComp)
app.component('signup-comp', SignupComp)

app.mount('#app')