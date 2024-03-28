import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import FullBody from "./components/FullBody.vue"
import "../public/index.css"
// Import our custom CSS


createApp(FullBody).component(".container")
createApp(NavBar).component(".nav")
createApp(App).mount('#app')
