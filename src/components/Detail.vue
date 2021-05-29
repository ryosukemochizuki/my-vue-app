<template>
  <div class="show">
    <h1 class="show__text">{{ theme.themeText }}</h1>
    <div class="buttons">
      <button
        v-if="nowTheme === `questions`"
        class="change__button"
        @click="handleChange"
      >
        <router-link to="/"> 済み </router-link>
      </button>
      <button v-else class="change__button" @click="handleChange">
        <router-link to="/completes"> 取り消し </router-link>
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
    if (this.nowTheme === "questions") {
      this.otherTheme = "completes"
    } else {
      this.otherTheme = "questions"
    }

    console.log("nowTheme", this.nowTheme)
    console.log("otherTheme", this.otherTheme)

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
}

a {
  display: block;
}

.change__button:hover {
  cursor: pointer;
}
</style>
