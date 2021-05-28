<template>
  <div id="app">
    <Header />
    <Navbar />
    <div class="pages">
      <router-view />
    </div>
    <Post />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Navbar from "@/components/Navbar.vue"
import Post from "@/components/Post.vue"
export default {
  components: {
    Header,
    Navbar,
    Post,
  },
}
</script>

<style scoped>
/* #app {
  position: relative;
} */

.pages {
  padding: 7.5rem 0 5rem;
}
</style>
