<template>
  <div class="show">
    <h1>{{ question.questionText }}</h1>
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  props: {
    questionId: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      question: "",
    }
  },
  created() {
    const question = firebase
      .firestore()
      .collection("questions")
      .doc(this.questionId)

    question.get().then((doc) => {
      this.question = { id: doc.id, ...doc.data() }
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
}
</style>
