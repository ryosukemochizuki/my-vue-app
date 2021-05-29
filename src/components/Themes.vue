<template>
  <section class="themes">
    <div class="theme__contents" v-for="theme in allThemes" :key="theme.id">
      <router-link
        :to="{
          name: 'show',
          params: {
            themeId: theme.id,
            themes: themes,
          },
        }"
      >
        <p class="theme__text">{{ theme.themeText }}</p>
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
        return ["questions", "completes"].includes(value)
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

.theme__contents {
  border-bottom: 1px solid lightblue;
}

.theme__text {
  font-size: 1.2em;
  padding: 1.3rem;
  transition: 0.5s;
}

.theme__text:hover {
  background-color: rgba(105, 194, 199, 0.3);
  transition: 0.5s;
}
</style>
