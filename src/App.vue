<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter title="Entraron" /> <!--se define en el template-->
  <Counter title="Salieron" /> 
</template> 

<script>
import Counter from './components/Counter.vue' //se importa el componente creado

export default {
  name: 'App',
  components: { // se define en los components
    Counter
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
  margin-top: 60px;
}
</style>
