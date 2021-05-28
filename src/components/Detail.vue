<template>
  <div class="show">
    <h1 class="show-text">{{ question.questionText }}</h1>
    <div class="buttons">
      <button class="complete-button" @click="moveToComp">
        <router-link to="/">済み</router-link>
      </button>
    </div>
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
  methods: {
    moveToComp() {
      const complete = {
        completeText: this.question.questionText,
        createdAt: this.question.createdAt,
      }
      firebase
        .firestore()
        .collection("completes")
        .add(complete)
        .then(() => {
          firebase
            .firestore()
            .collection("questions")
            .doc(this.questionId)
            .delete()
          // .then(() => {
          //   console.log("移動完了")
          // })
        })
    },
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
  display: flex;
  justify-content: space-between;
}

.show-text {
  width: 85%;
}

.buttons {
  width: 10%;
}

.complete-button {
  display: block;
  width: 100%;
  border: none;
  background-color: lightblue;
  padding: 4px;
  border-radius: 25px;
  color: white;
}

a {
  display: block;
}

.complete-button:hover {
  cursor: pointer;
}
</style>
