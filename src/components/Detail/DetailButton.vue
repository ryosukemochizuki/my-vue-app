<template>
  <button class="change__button" @click="clickFunc">
    <router-link v-if="nowTheme === `questions`" to="/questions">
      {{ texts[0] }}
    </router-link>
    <router-link v-else-if="nowTheme === `archives`" to="/archives">
      {{ texts[1] }}
    </router-link>
    <router-link v-else to="/completes"> {{ texts[2] }} </router-link>
  </button>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      require: true,
      validates(value) {
        return ["お題", "保留", "済み", "削除"].includes(value)
      },
    },
    nowTheme: {
      type: String,
      require: true,
      validates(value) {
        return ["questions", "archives", "completes"].includes(value)
      },
    },
    clickFunc: {
      type: Function,
      require: true,
    },
  },
}
</script>

<style scoped>
.change__button {
  display: block;
  width: 5rem;
  height: 2.3rem;
  font-weight: bold;
  border: none;
  background-color: #a7d398;
  padding: 4px;
  border-radius: 10px;
}

a {
  display: block;
  color: white;
}

.change__button:hover {
  cursor: pointer;
}
</style>
