<template>
  <div id="app">
    <Header />
    <Navbar />
    <router-view />
    <Post />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import Post from "@/components/Post.vue"
export default {
  components: {
    Header,
    Navbar,
    Footer,
    Post,
  },
}
</script>

<style scoped>
#app {
  position: relative;
  min-height: 100%;
}
</style>
