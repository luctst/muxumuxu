<template>
  <div id="app">
    <header-vue></header-vue>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    'header-vue': Header 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
