import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SigneupView from '../views/SigneupView.vue'
import DashboardView from '../views/DashboardView.vue'
import CustomerView from '../views/CustomerDashboard/CustomerView.vue'
// import profile from '../components/DashboardComponents/profile.vue'
// import historique from '../components/DashboardComponents/historique.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path : '/signup',
      name : 'signup',
      component: SigneupView
      
    },
    {
      path : '/Customer',
      name : 'Customer',
      component: CustomerView,
      children: [
        {
          path: '/facteur',
          component: ()=> import('../components/CustomerComponents/facteur.vue')
        }
      ]
      
    },
    {
      path : '/admin',
      name : 'admin',
      component: DashboardView,
      children:[
        {
          path:'/profile',
        component: ()=> import('../components/DashboardComponents/personnel/profile.vue')
        },
        {
          path:'/historique',
        component: ()=> import('../components/DashboardComponents/statistics/historique.vue')
        },
        {
          path:'/orders',
        component: ()=> import('../components/DashboardComponents/orders/orders.vue')
        }
        ,
        {
          path:'/product',
        component: ()=> import('../components/DashboardComponents/product/product.vue')
        },
        {
          path:'/customers',
        component: ()=> import('../components/DashboardComponents/customer/customers.vue')
        },
        
      ]

      
    },

    
    
  ]
})

export default router
