import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import FullBody from "./components/FullBody.vue"
import "../public/index.css"
// Import our custom CSS
import "./scss/styles.scss"
// main.js/ts
import 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'



createApp(FullBody).component(".container")
createApp(NavBar).component(".navbar")
createApp(App).mount('#app')
