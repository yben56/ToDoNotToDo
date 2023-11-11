import { createApp } from 'vue'
import App from './App.vue'

//Bootstrap 5.3.2
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import BootstrapModal from './components/BootstrapModal.vue'
import LoginForm from './components/Auth/LoginForm.vue'
import SignupForm from './components/Auth/SignupForm.vue'

//Lang
import lang from './js/lang.js'

const app = createApp(App)
app.use(lang)
app.component('bootstrap-modal', BootstrapModal)
app.component('login-form', LoginForm)
app.component('signup-form', SignupForm)
app.mount('#app')