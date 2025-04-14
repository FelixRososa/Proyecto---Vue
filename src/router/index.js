import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },
    */
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../Modules/contador/components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../Modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../Modules/registro/views/RegistrarView.vue'),
    },
  ],
})

export default router
