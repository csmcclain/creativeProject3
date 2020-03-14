<template>
<div id="app">
  <div id="menu" class="ul">
      <router-link to="/">
        <p class="green">Main</p>
      </router-link>
      <router-link to="/build">
          <p class="green">Build Your PC</p>
      </router-link>
      <router-link to="/results">
          <p class="green">Results</p>
      </router-link>
  </div>
  <router-view />
  <footer>
  <p>GitHub:<a class="foot" href="https://github.com/CJohnL/CS-260-Creative-Project-1">
  CS-260-Creative-Project-1</a></p>
</footer>
</div>
</template>

<style>
*{
  margin: 0;
  box-sizing: border-box;
}

body{
  font-size: 18px;
  font-family: 'Arial Narrow', Arial, sans-serif;
  padding-bottom: 1.6em;
  background-color: grey;
}

a {
  text-decoration: none;
  color: white;
  justify-content: center;
  text-align: center;
}

.ul {
  list-style-type: none;
  margin: 0;
  padding: 2px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  background-color: rgb(0, 15, 29);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.green:hover {
  color: greenyellow
}

footer {
  padding: 2px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  margin-bottom: auto;
  margin-top: auto;
  color: white;
  background-color: rgb(0, 15, 29);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.foot {
  color: rgb(34, 102, 95);
  font-weight: bold;
  text-decoration: none;
}
</style>

