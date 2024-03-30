import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import FullBody from "./components/FullBody.vue"
import "../public/index.css"
import './assets/data.json'

const app = createApp(App);

app.component("NavBar", NavBar); 
app.component("FullBody", FullBody); 

app.mount('#app');
