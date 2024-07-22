import { createRouter, createWebHistory } from 'vue-router'
import Calculo_de_Calificaciones from '@/components/Calculo_de_Calificaciones.vue'
import Formulario_de_Registro from '@/components/Formulario_de_Registro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Calculo_de_Calificaciones',
      component: Calculo_de_Calificaciones
    },
    {
      path: '/Formulario_de_Registro',
      name: 'Formulario_de_Registro',
      component: Formulario_de_Registro
    },
    
  ]
})

export default router
