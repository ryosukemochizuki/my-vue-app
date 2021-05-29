<template>
  <section class="completes">
    <div
      class="complete-contents"
      v-for="complete in completes"
      :key="complete.id"
    >
      <router-link
        :to="{
          name: 'show',
          params: {
            completeId: complete.id,
          },
        }"
      >
        <p class="complete-text">{{ complete.completeText }}</p>
      </router-link>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
    return {
      completes: [],
      subscribe: null,
    }
  },
  created() {
    // コレクションごと取得
    const ref = firebase
      .firestore()
      .collection("completes")
      .orderBy("createdAt", "desc")

    this.subscribe = ref.onSnapshot((snapshot) => {
      let completes = []
      snapshot.forEach((doc) => {
        completes.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      this.completes = completes
    })
  },
  destroyed() {
    this.subscribe()
    this.subscribe = null
  },
}
</script>

<style scoped>
.completes {
  width: 80%;
  line-height: 1.5rem;
  margin: 0 auto;
}

.complete-contents {
  border-bottom: 1px solid lightblue;
}

.complete-text {
  font-size: 1.2em;
  padding: 1.3rem;
  transition: 0.5s;
}

.complete-text:hover {
  background-color: rgba(105, 194, 199, 0.3);
  transition: 0.5s;
}
</style>
