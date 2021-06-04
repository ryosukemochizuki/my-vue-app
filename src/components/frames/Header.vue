<template>
  <header class="header">
    <div class="top__bar">
      <router-link to="/questions">
        <div class="header__logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <p class="header__title">Geek Discussion</p>
      </router-link>
      <div v-if="adminState === false" class="header__login">
        <router-link to="/adminLogin"
          ><img src="@/assets/login.png" alt="login"
        /></router-link>
      </div>
      <div v-if="adminState === true" class="header__logout">
        <img src="@/assets/logout.png" @click="adminLogout" alt="logout" />
      </div>
    </div>
  </header>
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
.header {
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  background-color: #a7d398;
  position: fixed;
  top: 0;
}

.top__bar {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  height: 60%;
  padding-right: 0.5rem;
}

.header__logo img,
.header__login img,
.header__logout img {
  height: 100%;
  display: block;
}

.header__title {
  font-size: 1.1rem;
}

a {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
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
