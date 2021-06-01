<template>
  <div class="show">
    <h1 class="show__text">{{ theme.themeText }}</h1>
    <div class="show__buttons">
      <DetailButton
        :texts="['済み', '済み', '戻す']"
        :nowTheme="nowTheme"
        :clickFunc="moveToQuesOrComp"
      />
      <DetailButton
        :texts="['保留', '戻す', '保留']"
        :nowTheme="nowTheme"
        :clickFunc="moveToQuesOrArchive"
      />
      <DetailButton
        :texts="['削除', '削除', '削除']"
        :nowTheme="nowTheme"
        :clickFunc="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import DetailButton from "@/components/Detail/DetailButton"

export default {
  components: {
    DetailButton,
  },
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
    // お題か済みに移動
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
      // console.log(this.moveToQuesOrComp)
    },
    // お題か保留に移動
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
      // console.log(this.moveToQuesOrArchive)
    },
    // 削除
    handleDelete() {
      firebase.firestore().collection(this.nowTheme).doc(this.themeId).delete()
      // console.log(this.handleDelete)
    },
  },

  created() {
    this.nowTheme = this.themes

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

.show__buttons {
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
