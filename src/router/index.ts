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
import Cart from '../components/products/Cart.vue';
import Order from '../components/products/Order.vue';
import ThankYou from '../components/products/ThankYou.vue'
import Admin from '../components/users/Admin.vue';
import AdminProducts from '../components/users/AdminProducts.vue';
import AdminProductsCreate from '../components/users/AdminProductsCreate.vue';
import AdminProductsEdit from '../components/users/AdminProductsEdit.vue';

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
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/order/thanks/:id',
    name: 'Thanks',
    component: ThankYou,
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/products',
    name: 'AdminProducts',
    component: AdminProducts
  },
  {
    path: '/admin/products/create',
    name: 'AdminProductsCreate',
    component: AdminProductsCreate
  },
  {
    path: '/admin/products/edit/:id',
    name: 'AdminProductsEdit',
    component: AdminProductsEdit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
