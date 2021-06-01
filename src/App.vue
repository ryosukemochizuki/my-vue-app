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
import Header from "@/components/frames/Header"
import Navbar from "@/components/frames/Navbar/Navbar"
import Post from "@/components/frames/Post"
export default {
  components: {
    Header,
    Navbar,
    Post,
  },
}
</script>

<style scoped>
.pages {
  padding: 7.5rem 0 5rem;
}
</style>
