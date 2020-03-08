import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shrooms from "@/views/Shrooms.vue";
import ShroomDetail from "@/views/ShroomDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/grzyby/',
    name: 'shrooms',
    component: Shrooms,
  },
  {
    props: true,
    path: '/grzyby/:shroomName',
    name: 'shroom-detail',
    component: ShroomDetail,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
});

export default router;
