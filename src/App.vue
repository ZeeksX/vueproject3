<template>
  <NavBar/>
  <FullBody/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FullBody from "./components/FullBody.vue"
import "../public/index.css"
import "./scss/styles.scss"

export default {
  name: 'App',
  components: {
    NavBar,
    FullBody
  }
}
</script>
