<template>
  <nav id="navbar">
    <input id="3" v-model="input" />
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    input: {
      get() {
        return this.$store.state.inputValue;
      },
      set(e) {
        this.$store.commit("inputChanged", e);
      },
    },
  },

  methods: {
    inputChanged(e) {
      this.$store.commit("inputChanged", e.target.value);
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  background: #7f7f83;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 0;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 20px 20px -20px;
}
</style>
