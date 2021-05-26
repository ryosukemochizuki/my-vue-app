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
}

.nav__lists {
  display: flex;
  height: 30px;
  border-bottom: lightblue 1px dotted;
}

.nav__lists__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.nav__lists__item:nth-child(1) {
  border-right: lightblue 1px dotted;
}
</style>
