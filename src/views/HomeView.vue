<template>
  <div class="home">
    <HomeComp />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/HomeComp.vue";

export default {
  name: "HomeView",
  components: {
    HomeComp: Home,
  },
};
</script>
