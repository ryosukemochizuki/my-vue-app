<template>
  <header class="header">
    <div class="top__bar">
      <HeaderLogo />
      <InOutButton />
    </div>
  </header>
</template>

<script>
import HeaderLogo from "@/components/frames/Header/HeaderLogo"
import InOutButton from "@/components/frames/Header/InOutButton"

export default {
  components: {
    HeaderLogo,
    InOutButton,
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  background-color: #a7d398;
  position: fixed;
  top: 0;
}

.top__bar {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
