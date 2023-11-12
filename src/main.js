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
app.component('lang-btn', LangBtn)
import lang from './js/lang.js'
import LangBtn from './components/LangBtn.vue'

//Modal
import BootstrapModal from './components/BootstrapModal.vue'
app.component('bootstrap-modal', BootstrapModal)

//Auth
import LoginForm from './components/Auth/LoginForm.vue'
import SignupForm from './components/Auth/SignupForm.vue'
app.component('login-form', LoginForm)
app.component('signup-form', SignupForm)

app.mount('#app')