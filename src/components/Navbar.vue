<template>
  <section class="nav">
    <ul class="nav__lists">
      <li class="nav__lists__item"><router-link to="/">お題</router-link></li>
      <li class="nav__lists__item">
        <router-link to="/complete">済み</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  width: 100%;
  position: fixed;
  top: 4rem;
}

.nav__lists {
  height: 2.3rem;
  display: flex;
  border-bottom: #69c2c7 1px dotted;
  background-color: white;
}

.nav__lists__item {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__lists__item:nth-child(1) {
  border-right: rgb(105, 194, 199) 1px dotted;
}
</style>
