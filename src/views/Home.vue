<template>
  <section class="questions">
    <button @click="addQuestion">追加</button>
    <div v-for="question in questions" :key="question">
      <p>{{ question.text }}</p>
    </div>
  </section>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      questions: [],
      text: "接続テスト",
    }
  },
  methods: {
    addQuestion() {
      const questionText = {
        text: this.text,
      }
      firebase
        .firestore()
        .collection("questions")
        .add(questionText)
        .then((ref) => {
          this.questions.push({ id: ref.id, ...questionText })
        })
    },
  },
}
</script>

<style scoped></style>
