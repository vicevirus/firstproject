<template>
  <div id="app">
    
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">Samado Company</b-navbar-brand>


    <b-navbar-nav>
      <b-nav-item href="#/About"><b>About</b></b-nav-item>
      <b-nav-item href="#/Contacts"><b>Contacts</b></b-nav-item>
      <b-nav-item href="#/Dashboard"><b>Attendance Check</b></b-nav-item>
      <b-nav-item href="#/Profile"><b>Profile</b></b-nav-item>
      <b-nav-item href="#/Charts"><b>Charts</b></b-nav-item>

      <div class="right">
  <b-nav-item href="#/Login"><b>Login</b></b-nav-item>
</div>
    </b-navbar-nav>

</b-navbar>


<router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.right {
    position: absolute;
    right: 0px;
    width: 100px;
    padding: 1px;
}
</style>

