import { createApp } from 'vue'
import App from './App.vue'

//Bootstrap 5.3.2
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import BootstrapModal from './components/BootstrapModal.vue'
import LoginForm from './components/Auth/LoginForm.vue'
import SignupForm from './components/Auth/SignupForm.vue'

const app = createApp(App)
app.component('bootstrap-modal', BootstrapModal)
app.component('login-form', LoginForm)
app.component('signup-form', SignupForm)
app.mount('#app')