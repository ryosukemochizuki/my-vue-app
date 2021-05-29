import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import Show from "@/views/Show.vue"
import Complete from "@/views/Complete.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/show/:questionId",
    name: "show",
    component: Show,
    props: true,
  },
  {
    path: "/complete",
    name: "complete",
    component: Complete,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
