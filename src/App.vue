<template>
  <div>
    <app-header></app-header>
    <!-- router-view is showing the content -->
    <router-view></router-view>
  </div>
</template>

<script>

import header from './components/header.vue';


export default {

  components:{
    'app-header': header,
  },
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
