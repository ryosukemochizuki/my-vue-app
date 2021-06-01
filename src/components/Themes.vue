<template>
  <section class="themes">
    <div class="themes__contents" v-for="theme in allThemes" :key="theme.id">
      <router-link
        :to="{
          name: 'Show',
          params: {
            themeId: theme.id,
            themes: themes,
          },
        }"
      >
        <p class="themes__text">{{ theme.themeText }}</p>
      </router-link>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app"

export default {
  props: {
    themes: {
      type: String,
      require: true,
      validator(value) {
        return ["questions", "archives", "completes"].includes(value)
      },
    },
  },
  data() {
    return {
      allThemes: [],
      subscribe: null,
    }
  },
  created() {
    // コレクションごと取得
    const ref = firebase
      .firestore()
      .collection(this.themes)
      .orderBy("createdAt", "desc")

    // 今いるテーマの変更を購読する
    this.subscribe = ref.onSnapshot((snapshot) => {
      let allThemes = []
      snapshot.forEach((doc) => {
        allThemes.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      this.allThemes = allThemes
    })
  },
  // コンポーネントを消える時は購読情報も消す
  destroyed() {
    this.subscribe()
    this.subscribe = null
  },
}
</script>

<style scoped>
.themes {
  width: 80%;
  line-height: 1.5rem;
  margin: 0 auto;
}

.themes__contents {
  border-bottom: 1px solid #a7d398;
}

.themes__text {
  font-size: 1.2em;
  padding: 1.3rem;
  transition: 0.5s;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.themes__text:hover {
  background-color: rgba(167, 211, 152, 0.3);
  transition: 0.5s;
}
</style>
