<template>
<div class="wrapper">
  <div class="products centered">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="'/images/'+product.image">
      </div>
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div>
        <h2>{{product.price}}</h2>
      </div>
      <div>
        <button @click="addToBuild(product)" class="auto">Choose this product!</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Products',
  props: {
    products: Array
  },
  methods: {
    addToBuild(product)
    {
        if (product.type === "RAM"){
            this.$root.$data.ram1 = product;
        }
        else if (product.type === "ROM"){
            this.$root.$data.rom1 = product;
        }
        else if (product.type === "GPU"){
            this.$root.$data.gpu1 = product;
        }
        else{
            this.$root.$data.cpu1 = product;
        }
    }
  }

}
</script>

<style scoped>

h2{
  color: azure;
}

.centered{
  text-align: center;
  align-content: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: darkslategrey;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding: 5px;
  height: 45px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

button {
  height: 50px;
  background: lightgreen;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>



