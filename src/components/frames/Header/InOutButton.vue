<template>
  <div class="header__login">
    <router-link v-if="adminState === false" to="/adminLogin"
      ><img src="@/assets/login.png" alt="login"
    /></router-link>
    <img v-else src="@/assets/logout.png" @click="adminLogout" alt="logout" />
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
    return {
      login: "",
    }
  },
  methods: {
    adminLogout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          if (this.$route.path !== "/questions") {
            this.$router.push("/questions")
          }
        })
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.login = true
        } else {
          this.login = false
        }
      }.bind(this)
    )
  },
  computed: {
    adminState() {
      return this.login
    },
  },
}
</script>

<style scoped>
.header__login img,
.header__logout img {
  height: 100%;
  display: block;
}

.header__login,
.header__logout {
  height: 60%;
  margin-right: 3rem;
}

.header__login:hover,
.header__logout:hover {
  cursor: pointer;
}
</style>
