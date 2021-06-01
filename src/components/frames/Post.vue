<template>
  <div class="post__area">
    <div class="input__wrapper">
      <textarea
        class="input__textarea"
        name="themeText"
        placeholder="お題を入力して下さい。 ex) ...について意見を聞きたい。"
        v-model="themeText"
        :style="heightStyles"
        ref="area"
      ></textarea>
      <button class="input__button" @click="addQuestion">投稿する</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
    return {
      themeText: "",
      height: 0,
    }
  },
  mounted() {
    this.handleInput()
  },
  watch: {
    // themeTextの更新時、高さを取得する
    themeText() {
      this.handleInput()
    },
  },
  computed: {
    // styleを動的に変更する
    heightStyles() {
      return { height: this.height }
    },
  },
  methods: {
    // お題の追加
    addQuestion() {
      // 空だったら処理を止める
      if (!this.themeText) {
        return
      }

      const info = {
        themeText: this.themeText,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
      firebase.firestore().collection("questions").add(info)
      this.themeText = ""
    },
    // textareaの高さを取得
    handleInput() {
      this.height = "0" // どんどん足されていくのを防ぐ
      this.$nextTick(() => {
        this.height = this.$refs.area.scrollHeight - 16 + "px"
      })
    },
  },
}
</script>

<style scoped>
.post__area {
  width: 100%;
  position: fixed;
  bottom: 1rem;
}

.input__wrapper {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.input__textarea {
  width: 80%;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #a7d398;
}

.input__button {
  display: block;
  height: 2.2rem;
  width: 5rem;
  font-weight: bold;
  border: none;
  background-color: #a7d398;
  padding: 4px;
  border-radius: 10px;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
}

.input__button:hover {
  cursor: pointer;
  background-color: #008000;
}

@media screen and (max-width: 700px) {
  .post__area {
    bottom: 3rem;
  }

  .input__wrapper {
    width: 90%;
    justify-content: center;
  }

  .input__textarea {
    width: 100%;
  }

  .input__button {
    width: 100%;
    bottom: -2.5rem;
  }
}
</style>
