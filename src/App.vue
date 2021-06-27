<template>
  <div id="app">
    <navbar />
    <home />
    <about />
    <certificate />
    <redesocial />
    <portfolio />
    <div class="bg-dark p-3 mt-5">
      <div class="d-flex justify-content-center mt-5">
         <a href="https://github.com/RodrigoVitor"   target="_blank" class="p-2"><img img class="bg-light" src="../node_modules/bootstrap-icons/icons/github.svg" alt="git-hub"> </a>
        <a href="https://www.linkedin.com/in/rodrigo-vitor-4b59b7203/"  target="_blank" class="p-2"><img img class="bg-light" src="../node_modules/bootstrap-icons/icons/linkedin.svg" alt="linkedin"> </a>
      </div>
      <p class="text-center mt-3 fs-4"><a class="text-light" href="#main">Home</a></p>
      <p class="text-center text-light mt-3 fs-3">&copy; by - Rodrigo Vitor 2021</p>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Certificate from './components/certificate.vue'
import Redesocial from './components/Redesocial.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: {
    home: Home,
    about: About,
    navbar: navbar,
    certificate: Certificate,
    redesocial: Redesocial,
    portfolio: Portfolio,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
div a img {
    width:30px; 
}
a{
  text-decoration:none
}

</style>
