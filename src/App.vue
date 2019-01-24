<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<Tabs></Tabs>-->
    <router-view/>
  </div>
</template>

<script>
  import Tabs from './components/tabs/index'

export default {
  name: 'App',
  components: {Tabs}
}
</script>

<style>
  body {
    background-color: #F0F2F5;
    height: 100%;
    font-family: 'Microsoft YaHei';
    margin: 0 auto;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
