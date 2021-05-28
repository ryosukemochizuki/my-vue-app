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
          params: {
            questionId: question.id,
            questionObj: question,
          },
        }"
      >
        <p class="question-text">{{ question.questionText }}</p>
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
      let questions = []
      snapshot.forEach((doc) => {
        questions.push({
          id: doc.id,
          ...doc.data(),
        })
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
  line-height: 1.5rem;
  margin: 0 auto;
}

.question-contents {
  border-bottom: 1px solid lightblue;
}

.question-text {
  font-size: 1.2em;
  padding: 1.3rem;
  transition: 0.5s;
}

.question-text:hover {
  /* background-color: #69c2c74d; */
  background-color: rgba(105, 194, 199, 0.3);
  transition: 0.5s;
}
</style>
