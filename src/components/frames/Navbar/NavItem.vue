<template>
  <li class="navbar__lists__item">
    <router-link
      :to="{ path }"
      :class="{
        here: $route.path.match(new RegExp(`${match}`)),
      }"
      >{{ navTitle }}</router-link
    >
  </li>
</template>

<script>
export default {
  props: {
    // 移動先のパス
    path: {
      type: String,
      require: true,
      validates(value) {
        return ["/questions", "/archives", "/completes"].includes(value)
      },
    },
    // hereクラスの取り外し判定用
    match: {
      type: String,
      require: true,
      validates(value) {
        return ["questions", "archives", "completes"].includes(value)
      },
    },
    // 表示する文字
    navTitle: {
      type: String,
      require: true,
      validates(value) {
        return ["お題", "保留", "済み"].includes(value)
      },
    },
  },
}
</script>

<style scoped>
.navbar__lists__item {
  height: 100%;
  width: calc(100% / 3);
  font-weight: normal;
  display: table;
  text-align: center;
}

a {
  height: 100%;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  opacity: 0.5;
}

a.here {
  font-weight: bold;
  opacity: 1;
  border-bottom: #a7d398 1px solid;
  background-color: rgba(167, 211, 152, 0.5);
}
</style>
