<template>
  <div class="detail">
    <h1 class="detail__text">{{ theme.themeText }}</h1>
    <div class="detail__buttons" :class="{ seen: isAdmin }">
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
    // どのお題かを判別するため
    themeId: {
      type: String,
      require: true,
    },
    // どのテーマか
    themes: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      theme: "",
      // ３つテーマがあるからコレクションを判別するため準備
      nowTheme: "",
      anotherTheme: "",
      otherTheme: "",
      isAdmin: false,
    }
  },
  methods: {
    // それぞれのDetailButtonコンポーネントに違ったメソッドを渡したいためDetailで定義

    // anotherThemeにデータを移動
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
          // 移動前のテーマから消す
          firebase
            .firestore()
            .collection(this.nowTheme)
            .doc(this.themeId)
            .delete()
        })
    },
    // otherThemeにデータを移動
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
          // 移動前のテーマから消す
          firebase
            .firestore()
            .collection(this.nowTheme)
            .doc(this.themeId)
            .delete()
        })
    },
    // 削除
    handleDelete() {
      firebase.firestore().collection(this.nowTheme).doc(this.themeId).delete()
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
  mounted() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.isAdmin = true
    //   }
    // })
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.isAdmin = true
        }
      }.bind(this)
    )
  },
}
</script>

<style scoped>
.detail {
  width: 80%;
  margin: 0 auto;
  padding: 1.7rem 1rem;
  font-size: 1.7em;
  line-height: 2.2rem;
  display: flex;
  justify-content: space-between;
}

.detail__text {
  width: 85%;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.detail__buttons {
  display: none;
}

.detail__buttons.seen {
  display: block;
}

.change__button:not(:last-of-type) {
  margin-bottom: 1rem;
}

@media screen and (max-width: 700px) {
  .detail {
    flex-direction: column;
  }
  .detail__text {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
