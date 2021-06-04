<template>
  <router-link to="/questions">
    <div class="header__logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <p class="header__title">Geek Discussion</p>
  </router-link>
</template>

<style scoped>
.header__logo {
  height: 60%;
  padding-right: 0.5rem;
}

.header__logo img {
  height: 100%;
  display: block;
}

.header__title {
  font-size: 1.1rem;
}

a {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
}
</style>
