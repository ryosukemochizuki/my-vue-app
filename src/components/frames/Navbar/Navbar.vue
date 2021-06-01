<template>
  <nav class="navbar">
    <ul class="navbar__lists">
      <NavItem path="/questions" match="questions" navTitle="お題" />
      <NavItem path="/archives" match="archives" navTitle="保留" />
      <NavItem path="/completes" match="completes" navTitle="済み" />
    </ul>
  </nav>
</template>

<script>
import NavItem from "@/components/frames/Navbar/NavItem"

export default {
  components: {
    NavItem,
  },
}
</script>

<style scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 4rem;
}

.navbar__lists {
  height: 2.3rem;
  display: flex;
  border-bottom: #69c2c7 1px solid;
  background-color: white;
}
</style>
