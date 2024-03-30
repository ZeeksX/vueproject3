<template>
  <div id="app">
    <HomePage/>
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import HomePage from "./components/HomePage.vue"
import "../public/index.css"
export default {
  name: 'App',
  setup() {
    const router = useRouter()
    return { router };
  },
  components:{
    HomePage,
  }
}
</script>
