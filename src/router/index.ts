import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ProductsCardPage from '../components/products/ProductsCardPage.vue'
import Products from '../views/Products.vue';
import NotFound from '../views/NotFound.vue';
import ApiDemoPage from '../pages/ApiDemoPage.vue';
import ApiUsersPage from '../pages/ApiUsersPage.vue';
import AdminUserList from '../views/AdminUserList.vue';
import Profile from '../components/users/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductsCardPage',
    component: ProductsCardPage,
    props: true
  },
  {
    path: '/edit',
    name: 'ApiDemoPage',
    component: ApiDemoPage
  },
  {
    path: '/usersedit',
    name: 'ApiUsersPage',
    component: ApiUsersPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  },
  {
    path: '/admin/users',
    name: 'AdminUserList',
    component: AdminUserList
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
