<template>
<div class="container">
  <h1 class="centered">Welcome to PCPartStuff.com</h1>
  <p class="centered">In this website you will be given the challenge to build your own PC. The goal is to 
    build the best performance PC for the lowest price.</p>
  <img class="centered" src="../../public/fire.gif">
  <br>
  <router-link class="button centered" to="/build">
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

img{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.container{
  align-content: center;
  max-width: 50%;
  margin-top: 6em;
  margin-left: 25%;
  margin-right: 25%;
  background-color: aliceblue;
  border: solid 2px lightgrey;
  background: rgba(255, 255, 255, 0.9);
}

.button{
  color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: lightgreen;
}
</style>

<script>
export default {
    name: 'Home',
}
</script>
