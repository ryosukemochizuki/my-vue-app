<template>
  <div class="show">
    <h1 class="show__text">{{ theme.themeText }}</h1>
    <div class="buttons">
      <button class="change__button" @click="moveToQuesOrComp">
        <router-link v-if="nowTheme === `questions`" to="/"> 済み </router-link>
        <router-link v-else-if="nowTheme === `archives`" to="/archives">
          済み
        </router-link>
        <router-link v-else to="/completes"> 戻す </router-link>
      </button>
      <button class="change__button" @click="moveToQuesOrArchive">
        <router-link v-if="nowTheme === `questions`" to="/"> 保留 </router-link>
        <router-link v-else-if="nowTheme === `archives`" to="/archives">
          戻す
        </router-link>
        <router-link v-else to="/completes"> 保留 </router-link>
      </button>
      <button class="change__button" @click="handleDelete">
        <router-link v-if="nowTheme === `questions`" to="/"> 削除 </router-link>
        <router-link v-else-if="nowTheme === `archives`" to="/archives">
          削除
        </router-link>
        <router-link v-else to="/completes"> 削除 </router-link>
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
      anotherTheme: "",
      otherTheme: "",
      theme: "",
    }
  },
  methods: {
    moveToQuesOrComp() {
      const theme = {
        themeText: this.theme.themeText,
        createdAt: this.theme.createdAt,
      }
      firebase
        .firestore()
        .collection(this.anotherTheme)
        .add(theme)
        .then(() => {
          firebase
            .firestore()
            .collection(this.nowTheme)
            .doc(this.themeId)
            .delete()
        })
    },
    moveToQuesOrArchive() {
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
    handleDelete() {
      firebase
        .firestore()
        .collection(this.nowTheme)
        .doc(this.themeId)
        .delete()
        .then(() => {
          console.log("削除に成功")
        })
    },
  },
  created() {
    this.nowTheme = this.themes
    // this.otherTheme = this.nowTheme === "questions" ? "completes" : "questions"

    if (this.nowTheme === "questions") {
      this.anotherTheme = "completes"
      this.otherTheme = "archives"
    } else if (this.nowTheme === "archives") {
      this.anotherTheme = "completes"
      this.otherTheme = "questions"
    } else {
      this.anotherTheme = "questions"
      this.otherTheme = "archives"
    }

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

.buttons {
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
  font-weight: bold;
}

.change__button:not(:last-of-type) {
  margin-bottom: 1rem;
}

a {
  display: block;
}

.change__button:hover {
  cursor: pointer;
}
</style>
