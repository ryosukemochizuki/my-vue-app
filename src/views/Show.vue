<template>
  <section id="show">
    <Detail :themeId="themeId" :themes="themes" />
  </section>
</template>

<script>
import Detail from "@/components/Detail/Detail"

export default {
  components: {
    Detail,
  },
  props: {
    themeId: {
      type: String,
      require: true,
    },
    themes: {
      type: String,
      require: true,
    },
  },
}
</script>
