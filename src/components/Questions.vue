<template>
  <section class="questions">
    <div
      class="question-contents"
      v-for="question in questions"
      :key="question.id"
    >
      <router-link
        :to="{
          name: 'show',
          params: { questionId: question.id, questionObj: `${question}` },
        }"
      >
        <p>{{ question.questionText }}</p>
      </router-link>
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
      // console.log(snapshot)
      let questions = []
      snapshot.forEach((doc) => {
        // console.log(doc)
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
  padding-bottom: 7.6rem;
  line-height: 1.5rem;
  margin: 0 auto;
}

.question-contents {
  padding: 1.3rem;
  font-size: 1.2em;
  border-bottom: 1px solid lightblue;
}
</style>
