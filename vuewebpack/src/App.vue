<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" >Navbar</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}" >Home</router-link>
          <router-link class="nav-link" to="/Newpage" >Page</router-link>
        </li>  
      </ul>
    </div>
  </div>
</nav>

<img alt="Vue logo" src="./assets/logo.png">
 <HelloWorld msg="Welcome to Your Vue.js App"/>
 
 <nav>
 <router-link to="/">Home</router-link>
 <router-link to="/about">About</router-link>
 <router-link :to="{name:'新增頁面'}">新增頁面</router-link>
</nav>

<div class="container">
 <router-view/>
 </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
 name: 'App',
 components: {
   HelloWorld
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
}

nav {
 padding: 30px;

  a{
   font-weight: bold;
   color: #2c3e50;

   &.router-link-exact-active {
     color: #42b983;
   }
 }
}
</style>
