import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductsCardPage from '../components/Products/ProductsCardPage.vue'
import Products from '../views/Products.vue';
import NotFound from '../views/NotFound.vue';
import Profile from '../components/Users/Profile.vue';
import Cart from '../components/Products/Cart/Cart.vue';
import Order from '../components/Products/Order/Order.vue';
import ThankYou from '../components/Products/Order/ThankYou.vue';
import Admin from '../components/Users/Admin.vue';
import AdminProducts from '../components/Users/AdminProducts.vue';
import AdminProductsCreate from '../components/Users/AdminProductsCreate.vue';
import AdminProductsEdit from '../components/Users/AdminProductsEdit.vue';
import GamePlatforms from '../components/Products/Filtration/GamePlatforms.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/products/platforms/:platform',
    name: 'GamePlatforms',
    component: GamePlatforms,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
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
