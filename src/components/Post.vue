<template>
  <div class="post-area">
    <div class="area-wrapper">
      <textarea
        class="input-textarea"
        v-model="questionText"
        name="questionText"
        :style="{ height }"
        placeholder="お題を入力して下さい。 ex) 今週のタスクの認識にズレがないか確認する。"
      ></textarea>
      <button class="input-button" @click="addQuestion">投稿する</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
    return {
      questionText: "",
      height: 16 + "px",
    }
  },
  methods: {
    // お題の追加
    addQuestion() {
      const info = {
        questionText: this.questionText,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
      firebase.firestore().collection("questions").add(info)
      this.questionText = ""
    },
  },
}
</script>

<style scoped>
.post-area {
  width: 100%;
  position: fixed;
  bottom: 4.3rem;
}

.area-wrapper {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.input-textarea {
  width: 80%;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 2px solid lightblue;
  border-radius: 25px;
  background-color: lightblue;
}

.input-button {
  display: block;
  border: none;
  background-color: lightblue;
  padding: 4px;
  border-radius: 25px;
  color: white;
}

.input-button:hover {
  cursor: pointer;
}
</style>
