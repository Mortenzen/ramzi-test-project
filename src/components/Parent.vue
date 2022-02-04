<template>
  <div class="parent">
    I am just a parent component.
    <Child />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },
  name: "Parent",
  props: {
    msg: String,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent {
  background-color: lightgrey;
  border: 15px solid green;
  margin: 200px 20px 20px 20px;
  padding: 10px 10px 10px 10px;
}
</style>
