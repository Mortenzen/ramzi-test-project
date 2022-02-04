<template>
  <div class="home">
    <Parent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Parent from "@/components/Parent.vue";

export default {
  name: "Home",
  components: {
    Parent,
  },
};
</script>

<style scoped>
.home {
  display: grid;
  place-items: center;
}
</style>
