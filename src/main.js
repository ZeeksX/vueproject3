import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import FullBody from "./components/FullBody.vue"
import "../public/index.css"
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS

createApp(FullBody).component(".container")
createApp(NavBar).component(".navbar")
createApp(App).mount('#app')
