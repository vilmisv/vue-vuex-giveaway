<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sort">Sort</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('search')

    let page = this.$route.params.page
    console.log('page ', page)
    let count = 10;
    if (page){
      count = page * 10
    }
    this.$store.dispatch('getData', count);

  },
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
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
  background-color: black;
  opacity: 0.9;
  position: fixed;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #d8dde2;
}

#nav a.router-link-exact-active {
  color: #16ca79;
}
</style>
