<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/featured">Featured</router-link>
      </li>
      <li>
        <router-link to="/albums">Albums</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  color: #350037;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 20px 10px;
  display: inline-block;
}
a {
  text-decoration: none;
  color: #350037;
}
a:hover, a:focus, a:active{
  color: #407213;
  border-bottom: 1px solid #350037;
}
</style>
