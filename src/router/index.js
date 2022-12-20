import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Library from '../views/Library.vue'
import NowPlaying from '../components/NowPlaying.vue'
// import Album from '../views/Album.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/Library',
    name: 'Library',
    component: Library
  },
  {
    path: '/playing',
    name: 'Playing',
    component: NowPlaying
  },
  // {
  //   path: '/album',
  //   name: 'Album',
  //   component: Album
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
