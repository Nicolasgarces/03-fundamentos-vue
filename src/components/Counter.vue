<template>
  <h2>{{customTitle}}</h2> 
  <p>{{ counter }}<sup>2</sup> =  {{ squareCounter }}</p> 
  <p data-testid="counter">{{ counter }}</p> <!--`data-testid="counter"` le da una especie de id o clase para poder identificar mas rapido lo que vamos a testear -->

    <div class="buttons-conta">
        <button @click="increase">+1</button> <!-- v-on: se puede sustituir por un @ para escuchar un evento-->
        <button @click="decrease">-1</button>
    </div>
</template>

<script>

export default {
    props: { //a las props se les debe definir el tipo de dato
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true 
            validator(value) { //recibe el value que se puso en el start
                return value >= 0 
            } 
        }
    }, 
    data() {
        return {
           counter: this.start
        }
    },
    methods:{
        getSquareValue() {
            console.log('getSquareValue')
            return this.counter * this.counter 
        },
        increase(){
            console.log('increase');
            this.counter++
        },
        decrease(){
            console.log('decrease');
            this.counter--
        },
        
    },
    computed:{ // las propiedades computadas se guardan en el cache
        squareCounter (){
            console.log('computed squareCounter')
            return this.counter * this.counter // las propiedades computadas tienen que retornar algo siempre
            
        },
        customTitle(){
             return this.title || 'Counter'
        }
        
    }
}
</script>

<style>

button{
    background-color: #64bb87;
    border-radius: 5px;
    border:  1px solid white;
    color: white;
    cursor: pointer;
    margin : 0 5px;
    /* padding: 5px 15px; */
    /* transition: 0.3s ease-in-out */
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>