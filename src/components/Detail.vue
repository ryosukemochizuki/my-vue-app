<template>
  <div class="show">
    <h1 class="show__text">{{ theme.themeText }}</h1>
    <div class="button">
      <button class="change__button" @click="handleChange">
        <router-link v-if="nowTheme === `questions`" to="/"> 済み </router-link>
        <router-link v-else to="/completes"> 戻す </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  props: {
    themeId: {
      type: String,
      require: true,
    },
    themes: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      nowTheme: "",
      otherTheme: "",
      theme: "",
    }
  },
  methods: {
    handleChange() {
      const theme = {
        themeText: this.theme.themeText,
        createdAt: this.theme.createdAt,
      }
      firebase
        .firestore()
        .collection(this.otherTheme)
        .add(theme)
        .then(() => {
          firebase
            .firestore()
            .collection(this.nowTheme)
            .doc(this.themeId)
            .delete()
        })
    },
  },
  created() {
    this.nowTheme = this.themes
    this.otherTheme = this.nowTheme === "questions" ? "completes" : "questions"

    const theme = firebase
      .firestore()
      .collection(this.nowTheme)
      .doc(this.themeId)

    theme.get().then((doc) => {
      this.theme = { id: doc.id, ...doc.data() }
    })
  },
}
</script>

<style scoped>
.show {
  width: 80%;
  margin: 0 auto;
  padding: 5rem 1rem;
  font-size: 1.7em;
  line-height: 2.2rem;
  display: flex;
  justify-content: space-between;
}

.show__text {
  width: 85%;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.button {
  width: 10%;
}

.change__button {
  display: block;
  width: 100%;
  border: none;
  background-color: lightblue;
  padding: 4px;
  border-radius: 25px;
  color: white;
}

a {
  display: block;
}

.change__button:hover {
  cursor: pointer;
}
</style>
