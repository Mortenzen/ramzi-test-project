<template>
  <div class="subpage">
    <Child />
  </div>
</template>

<script>
import Child from "@/components/Child.vue";

export default {
  name: "SubPage",
  data: function () {
    return {};
  },
  components: {
    Child,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.subpage {
  display: grid;
  place-items: center;
}
</style>
