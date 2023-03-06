import { createRouter, createWebHistory } from 'vue-router'
import ProfileDetails from '../components/ProfileDetails.vue'
import HomeView from '../components/HomeView.vue'




const routes = [
  {
    path:"/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: '/profile/:id',
    name: 'ProfileDetailsView',
    component: ProfileDetails
  },

  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
