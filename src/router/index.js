import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import Show from "@/views/Show.vue"
import Complete from "@/views/Complete.vue"
import Archive from "@/views/Archive.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:themes/:themeId",
    name: "show",
    component: Show,
    props: true,
  },
  {
    path: "/completes",
    name: "complete",
    component: Complete,
  },
  {
    path: "/archives",
    name: "Archive",
    component: Archive,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
