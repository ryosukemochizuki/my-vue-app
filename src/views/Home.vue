<template>
  <section class="home">
    <Questions />
    <Post />
  </section>
</template>

<script>
import Post from "@/components/Post.vue"
import Questions from "@/components/Questions.vue"

export default {
  components: { Post, Questions },
}
</script>
