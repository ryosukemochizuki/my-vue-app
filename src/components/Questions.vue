<template>
  <section class="questions">
    <div
      class="question-contents"
      v-for="question in questions"
      :key="question.id"
    >
      <p>{{ question.questionText }}</p>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
    return {
      questions: [],
      subscribe: null,
    }
  },
  created() {
    // コレクションごと取得
    const ref = firebase
      .firestore()
      .collection("questions")
      .orderBy("createdAt", "desc")

    this.subscribe = ref.onSnapshot((snapshot) => {
      console.log(snapshot)
      let questions = []
      snapshot.forEach((doc) => {
        console.log(doc)
        questions.push(doc.data())
      })
      this.questions = questions
    })
  },
  destroyed() {
    this.subscribe()
    this.subscribe = null
  },
}
</script>

<style scoped>
.questions {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 100px;
}

.question-contents {
  padding: 20px;
  font-size: 20px;
  border-bottom: 1px solid lightblue;
}
</style>
