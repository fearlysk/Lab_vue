import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import ProductsCardPage from '../components/products/ProductsCardPage.vue'
import Products from '../views/Products.vue';
import NotFound from '../views/NotFound.vue';
import ApiDemoPage from '../pages/ApiDemoPage.vue';

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
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
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
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
