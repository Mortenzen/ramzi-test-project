<template>
  <div class="child">{{ message }}</div>
</template>

<script>
export default {
  name: "child",
  computed: {
    message: {
      get() {
        return this.$store.state.inputValue;
      },
    },
  },
};
</script>

<style scoped>
.child {
  background-color: rgb(233, 233, 233);
  width: 300px;
  border: 15px solid rgb(9, 221, 9);
  margin: 200px 20px 20px 20px;
  padding: 10px 10px 10px 10px;
 
}
</style>
