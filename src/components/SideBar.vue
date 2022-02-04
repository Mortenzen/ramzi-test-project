<template>
  <div class="sidebar" id="side-bar">
    <div class="title">Please select</div>
    <router-link class="router-link" to="/">With Parent</router-link>
    <router-link class="router-link" to="/subpage"
      >No Parent</router-link
    >
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  name: "SideBar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.sidebar {
  margin: 0;
  padding: 30px 0px 0px 0px;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.title {
  padding: 0px 0px 40px 0px;
}

.router-link {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.router-link-exact-active {
  background-color: #04aa6d;
  color: white;
}

.router-link:hover:not(.active) {
  background-color: #555;
  color: white;
}

.router-link {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
</style>
