<template>
  <header class="header">
    <router-link to="/">
      <div class="header__logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
      <div class="header__title">Geek Discussion</div>
    </router-link>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  height: 4rem;
  padding: 0 1rem;
  background-color: lightblue;
}

.header__logo {
  padding-right: 5px;
  height: 80%;
}

.header__logo img {
  display: block;
  height: 100%;
}

.header__title {
  font-size: 1.2rem;
}

.router-link-exact-active,
.router-link-active {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
