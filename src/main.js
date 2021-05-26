import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
// resetCSSの読み込み
require("@/global.css")
// cloud firestoreの読み込み
import "./firebase.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
