<template>
  <div class="blog__details">
    <ErrorComp />
  </div>
</template>

<script>
import ErrorComp from "@/views/NotFound.vue";
export default {
  name: "404View",
  components: {
    ErrorComp,
  },
};
</script>
