<template>
    <div>
        <h1 v-if="isEmpty()">Please finish building your PC</h1>
        <div v-else>
        <h1>Your PC:</h1>
        <br>
        <div class="info">
        <h1>{{gpu1.name}}</h1>
        </div>
        <div class="image">
        <img :src="'/images/'+gpu1.image">
        </div>

        <div class="info">
        <h1>{{cpu1.name}}</h1>
        </div>
        <div class="image">
        <img :src="'/images/'+cpu1.image">
        </div>

        <div class="info">
        <h1>{{ram1.name}}</h1>
        </div>
        <div class="image">
        <img :src="'/images/'+ram1.image">
        </div>

        <div class="info">
        <h1>{{rom1.name}}</h1>
        </div>
        <div class="image">
        <img :src="'/images/'+rom1.image">
        </div>
        
        <div class="end">
        <h2>Your score: {{daScore}}</h2>
        <h2>Your price: ${{daPrice}}</h2>
        </div>
        </div>
        
    </div>
</template>

<style scoped>
h1{
  text-align: center;
  color: azure;
}

.end{
    padding-top: 3em;
}

h2{
  font-size: 3.5em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: yellow;
  font-style: italic;
  text-align: center;
}

img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 20%;
    max-height: 30%;
}
</style>

<script>
export default {
    name: 'Results',
    computed: {
       gpu1() {
           return this.$root.$data.gpu1;
       },
       rom1() {
           return this.$root.$data.rom1;
       },
       ram1() {
           return this.$root.$data.ram1;
       },
       cpu1() {
           return this.$root.$data.cpu1;
       },
       daScore() {
           let score = 0;
           score = this.$root.$data.rom1.score + this.$root.$data.cpu1.score + this.$root.$data.gpu1.score + this.$root.$data.ram1.score;
           let price = this.$root.$data.rom1.intPrice + this.$root.$data.cpu1.intPrice + this.$root.$data.gpu1.intPrice + this.$root.$data.ram1.intPrice;
           score = (score / price) * 1000000;
           return score.toFixed();
       },
       daPrice() {
           let price = this.$root.$data.rom1.intPrice + this.$root.$data.cpu1.intPrice + this.$root.$data.gpu1.intPrice + this.$root.$data.ram1.intPrice;
           return price.toFixed(2);
       }
    },
    methods:{
      isEmpty() {
        return (Object.keys(this.$root.$data.rom1).length === 0) || (Object.keys(this.$root.$data.ram1).length === 0) || 
        (Object.keys(this.$root.$data.gpu1).length === 0) || (Object.keys(this.$root.$data.cpu1).length === 0);
      },
    }
}

</script>