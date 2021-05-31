<template>
  <section class="nav">
    <ul class="nav__lists">
      <li class="nav__lists__item">
        <router-link
          to="/"
          :class="{
            here: $route.path.match(/^\/$/) || $route.path.match(/\/questions/),
          }"
          >お題</router-link
        >
      </li>
      <li class="nav__lists__item">
        <router-link
          to="/archives"
          :class="{ here: $route.path.match(/\/archives/) }"
          >保留</router-link
        >
      </li>
      <li class="nav__lists__item">
        <router-link
          to="/completes"
          :class="{ here: $route.path.match(/\/completes/) }"
          >済み</router-link
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      atQuestion: true,
      atComplete: false,
    }
  },
  created() {},
}
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
  border-bottom: #69c2c7 1px solid;
  background-color: white;
}

.nav__lists__item {
  width: 50%;
  display: table;
  text-align: center;
  height: 100%;
  font-weight: normal;
}

a {
  height: 100%;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
}

a.here {
  font-weight: bold;
  border-bottom: lightblue 3px solid;
  background-color: rgba(173, 216, 230, 0.5);
}
</style>
