<template>
  <div id="app">
    <header-vue :gameStarted="gameStarted"></header-vue>
    <main class="container">
      <words 
        :gameStarted="gameStarted"
        @gameStatus="gameStatus">
      </words>
    </main>
  </div>
</template>

<script>
import Header from './components/Header';
import Words from './components/Words';

export default {
  name: 'App',
  components: {
    'header-vue': Header,
    Words
  },
  data() {
    return {
      gameStarted: false
    }
  },
  methods: {
    gameStatus(value) {
      this.gameStarted = value;
    }
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

main {
  height: 80vh;
}
</style>
