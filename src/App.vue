<template>
  <div id="app">
    <NavBar />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
body {
  margin: 0 !important;
  padding-top: 60px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
