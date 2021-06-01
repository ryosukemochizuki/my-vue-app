<template>
  <header class="header">
    <router-link to="/questions">
      <div class="header__logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
      <p class="header__title">Geek Discussion</p>
    </router-link>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: #69c2c7;
  position: fixed;
  top: 0;
}

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
  display: flex;
  align-items: center;
}
</style>
