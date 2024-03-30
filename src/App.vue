<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue"
import "../public/index.css"
export default {
  name: 'App',
  components:{
    HomePage,
  }
}
</script>
