import Co from 'module';
<template>
  <h2>{{title || 'Counter'}}</h2>
  <p>{{ counter }}<sup>2</sup> =  {{( counter * counter )}}</p> 

    <div>
        <button v-on:click="increase">+1</button>
        <button v-on:click="decrease">-1</button>
    </div>
</template>

<script>
export default {
    props: ['title'], 
    data() {
        return {
           counter: 5 
           
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
            return this.counter * this.counter 
            
        },
        customTitle(){
             
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
    padding: 5px 15px;
    transition: 0.3s ease-in-out
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>