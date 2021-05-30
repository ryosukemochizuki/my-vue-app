<template>
  <div class="post__area">
    <div class="input__wrapper">
      <textarea
        class="input__textarea"
        v-model="themeText"
        name="themeText"
        :style="heightStyles"
        ref="area"
        placeholder="お題を入力して下さい。 ex) ...について意見を聞きたい。"
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
  mounted: function () {
    this.handleInput()
  },
  watch: {
    themeText() {
      this.handleInput()
    },
  },
  computed: {
    heightStyles() {
      return { height: this.height }
    },
  },
  methods: {
    // お題の追加
    addQuestion() {
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
    // textareaの高さを自動調節
    handleInput() {
      this.height = "0"
      this.$nextTick(() => {
        this.height = this.$refs.area.scrollHeight - 16 + "px"
        console.log(this.height)
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
  border-bottom: 2px solid lightblue;
  border-radius: 25px;
  background-color: lightblue;
}

.input__button {
  display: block;
  height: 2.3rem;
  width: 5rem;
  border: none;
  background-color: lightblue;
  padding: 4px;
  border-radius: 25px;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
}

.input__button:hover {
  cursor: pointer;
}
</style>
