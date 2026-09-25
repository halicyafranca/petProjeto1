import { createRouter, createWebHistory } from 'vue-router'
import PetView from '@/views/PetView.vue'
import AddPetsView from '@/views/AddPetsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/pets'
    },
    {
      path: '/pets',
      name: 'pets',
      component: PetView,
    },
    {
     path:'/pets/novo',
     name:'pets',
     component: AddPetsView ,
    },
  ],
})

export default router
