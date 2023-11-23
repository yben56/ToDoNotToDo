import { createWebHistory, createRouter } from 'vue-router'

import SignupSuccessComp from '@/components/Auth/SignupSuccessComp.vue'
import IndexComp from '@/components/Pages/IndexComp.vue'
import ToDoComp from '@/components/Pages/ToDoComp.vue'
import ListComp from '@/components/Pages/ListComp.vue'
import ContactComp from '@/components/Pages/ContactComp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: IndexComp },
      { path: '/Contact', component: ContactComp },
      //{ path: '/List', component: ListComp, props: (route) => ({ id: route.query.id }) },
      { path: '/List/:todoid', component: ListComp },
      { path: '/SignupSuccess', component: SignupSuccessComp },
      { path: '/ToDo', component: ToDoComp }, 
    ],
})
  
export default router