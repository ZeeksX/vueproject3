<template>
  <NavBar/>
  <FullBody/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FullBody from "./components/FullBody.vue"
import "../public/index.css"

export default {
  name: 'App',
  components: {
    NavBar,
    FullBody
  }
}
</script>
