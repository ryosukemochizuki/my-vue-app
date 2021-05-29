<template>
  <section id="show">
    <Detail :questionId="this.questionId" />
  </section>
</template>

<script>
import Detail from "@/components/Detail.vue"

export default {
  components: {
    Detail,
  },
  props: {
    questionId: {
      type: String,
      require: true,
    },
  },
}
</script>
