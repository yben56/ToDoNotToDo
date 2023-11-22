import { createWebHistory, createRouter } from 'vue-router'

import SignupSuccessComp from '@/components/Auth/SignupSuccessComp.vue'
import IndexComp from '@/components/Pages/IndexComp.vue'
import ToDoComp from '@/components/Pages/ToDoComp.vue'
import ListComp from '@/components/Pages/ListComp.vue'
import ContactComp from '@/components/Pages/ContactComp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/SignupSuccess', component: SignupSuccessComp },
      { path: '/', component: IndexComp },
      { path: '/ToDo', component: ToDoComp },
      { path: '/List', component: ListComp },
      { path: '/Contact', component: ContactComp },
    ],
})
  
export default router