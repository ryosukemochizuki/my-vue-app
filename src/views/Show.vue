<template>
  <div id="show">
    <Detail :questionId="this.questionId" />
  </div>
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
