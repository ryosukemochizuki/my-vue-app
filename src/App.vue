<template>
  <templete>
    <Header />
    <Navbar />
    <router-view />
    <Footer />
  </templete>
</template>

<script>
import Header from "@/components/Header"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer"
export default {
  components: {
    Header,
    Navbar,
    Footer,
  },
}
</script>
