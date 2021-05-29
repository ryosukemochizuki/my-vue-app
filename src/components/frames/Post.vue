<template>
  <div class="post__area">
    <div class="area__wrapper">
      <textarea
        class="input__textarea"
        v-model="themeText"
        name="themeText"
        :style="{ height }"
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
      height: 16 + "px",
    }
  },
  methods: {
    // お題の追加
    addQuestion() {
      const info = {
        themeText: this.themeText,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
      firebase.firestore().collection("questions").add(info)
      this.themeText = ""
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

.area__wrapper {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
  border: none;
  background-color: lightblue;
  padding: 4px;
  border-radius: 25px;
  color: white;
}

.input__button:hover {
  cursor: pointer;
}
</style>
