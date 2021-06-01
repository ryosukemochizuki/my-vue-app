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
  height: 3.5rem;
  padding: 0 1rem;
  background-color: #a7d398;
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
  opacity: 0.9;
}

a {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
}
</style>
