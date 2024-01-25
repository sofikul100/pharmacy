import { createRouter, createWebHistory } from 'vue-router';




function guest (to,from,next){
  if(localStorage.getItem('token')){
    next('/dashboard')
  }else{
    next()
  }
}


function guard (to,from,next){
    if(localStorage.getItem('token')){
      next()
    }else{
      next('/login')
    }
}





const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    beforeEnter: guard,
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/Home.vue'),
      },
      {
        path: '/users',
        name: 'user-list',
        component: () => import('@/views/dashboard/users/UserList.vue'),
      },
      {
        path: '/card',
        name: 'card',
        component: () => import('@/views/Card.vue'),
      },
      //=====categories routes=======//
      {
        path:'/categories',
        name:'categorie-list',
        component:() =>  import('@/views/dashboard/categories/categorieList.vue'),
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: guest,
  },

  {
    path: '/',
    name: 'interface',
    component: () => import('@/views/Interface.vue'),
    beforeEnter:guest
  }



]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
});








export default router
