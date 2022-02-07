<template>
  <div class="child">
    <div>{{ message }}</div>
    <button class="button" @click="youClicked">Read component data</button>
  </div>
</template>

<script>
export default {
  name: "child",
  methods: {
    youClicked: function () {
      console.log("You have clicked.")
    }
  },
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

.button {
  background-color: #6fa371; /* Green */
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
