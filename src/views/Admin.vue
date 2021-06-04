<template>
  <section id="admin">
    <div class="admin">
      <h1>管理者ログイン</h1>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="パスワード"
        v-model="password"
      />
      <button @click="adminLogin">ログイン</button>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
    return {
      email: "adminuser@example.com",
      password: "adminuser",
    }
  },
  methods: {
    adminLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/questions")
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.admin {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  width: 20%;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #a7d398;
  margin: 0 auto;
}

button {
  display: block;
  width: 5rem;
  height: 2.3rem;
  font-weight: bold;
  border: none;
  background-color: #a7d398;
  padding: 4px;
  border-radius: 10px;
  margin: 0 auto;
}

button:hover {
  cursor: pointer;
  background-color: #008000;
}
</style>
