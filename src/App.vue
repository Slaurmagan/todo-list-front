<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="logo">TodoListFront</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-if="loggedIn"><a href="#" @click.prevent="logout">Logout</a></li>
          <li v-else><a href="/auth/login">Login</a></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    logout() {
      window.localStorage.clear()
      this.$router.push('auth/login')
    }
  },
  mounted() {
    this.loggedIn = Boolean(window.localStorage.getItem('token'))
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo{
  font-size: 24px;
}
</style>
