import { createWebHistory, createRouter } from 'vue-router'

import IndexComp from '../components/IndexComp.vue'
import SignupSuccessComp from '../components/Auth/SignupSuccessComp.vue'
import ToDoComp from '../components/ToDoComp.vue'
import ListComp from '../components/ListComp.vue'
import ContactComp from '../components/ContactComp.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: IndexComp },
      { path: '/SignupSuccessComp', component: SignupSuccessComp },
      { path: '/ToDo', component: ToDoComp },
      { path: '/List', component: ListComp },
      { path: '/Contact', component: ContactComp },
    ],
})
  
export default router