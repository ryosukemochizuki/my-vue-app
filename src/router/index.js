import Vue from "vue"
import VueRouter from "vue-router"
import Question from "@/views/Question"
import Archive from "@/views/Archive"
import Complete from "@/views/Complete"
import Show from "@/views/Show"
import Admin from "@/views/Admin"

Vue.use(VueRouter)

const routes = [
  {
    // 初期画面を/questionsにする
    path: "/",
    redirect: "/questions",
  },
  {
    // お題一覧
    path: "/questions",
    name: "Questions",
    component: Question,
  },
  {
    // 済み一覧
    path: "/completes",
    name: "Complete",
    component: Complete,
  },
  {
    // 保留一覧
    path: "/archives",
    name: "Archive",
    component: Archive,
  },
  {
    // 詳細画面
    path: "/:themes/:themeId",
    name: "Show",
    component: Show,
    props: true,
  },
  {
    // 管理者ログイン画面
    path: "/adminLogin",
    name: "Admin",
    component: Admin,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
