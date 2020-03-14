<template>
    <div>
      <br>
      <br>
      <hr>
    <h1>GPU</h1>
      <hr>
    <Products :products="gpu" />
    <hr>
    <h1>CPU</h1>
    <hr>
    <Products :products="cpu" />
    <hr>
    <h1>RAM</h1>
    <hr>
    <products :products="ram" />
    <hr>
    <h1>ROM</h1>
    <hr>
    <products :products="rom" />

    <h1 v-if="isEmpty()">Please finish building your PC"</h1>
    <router-link class="centered button" to="/results" v-else>
      GO!
    </router-link>
    </div>
</template>

<style scoped>
.centered{
  text-align: center;
  align-content: center;
  padding: 0.4em;
}

.button{
  color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: lightgreen;
}

h1 {
  color: azure;
  text-align: center;
}
</style>

<script>
import Products from "../components/Products.vue"
export default {
    name: 'Build',
    components: {
      Products
    },
    computed: {
    gpu() {
      return this.$root.$data.gpuCart;
    },
    cpu() {
      return this.$root.$data.cpuCart;
    },
    ram() {
      return this.$root.$data.ramCart;
    },
    rom() {
      return this.$root.$data.romCart;
    },
    },
    methods:{
      isEmpty() {
        return (Object.keys(this.$root.$data.rom1).length === 0) || (Object.keys(this.$root.$data.ram1).length === 0) || 
        (Object.keys(this.$root.$data.gpu1).length === 0) || (Object.keys(this.$root.$data.cpu1).length === 0);
      },
    }
    

}
</script>

