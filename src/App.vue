<template>
  <div id="app">
    <ul class="nav justify-content-center bg-dark p-2">
      <li class="nav-item p-3 fs-5"><a class="text-light" href="#home">Home</a></li>
      <li class="nav-item p-3 fs-5"><a class="text-light" href="#">Sobre</a></li>
      <li class="nav-item p-3 fs-5"><a class="text-light" href="#">Certificado</a></li>
      <li class="nav-item p-3 fs-5"><a class="text-light" href="#">Rede Social</a></li>
      <li class="nav-item p-3 fs-5"><a class="text-light" href="#">Portfólio</a></li>
    </ul>

    <home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    home: Home
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

a{text-decoration: none;}
a:hover {
  color:rgb(107, 107, 107) !important;
  text-decoration: underline;
}
</style>
