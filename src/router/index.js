import Vue from "vue"
import VueRouter from "vue-router"
import Question from "@/views/Question.vue"
import Show from "@/views/Show.vue"
import Complete from "@/views/Complete.vue"
import Archive from "@/views/Archive.vue"

Vue.use(VueRouter)

const routes = [
  {
    // 初期画面を/questionsにする
    path: "/",
    redirect: "/questions",
  },
  {
    path: "/questions",
    name: "questions",
    component: Question,
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
