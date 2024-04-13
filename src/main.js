// import { createApp } from 'vue';
// import App from './App.vue';
// /*import router from './router';*/
// import "../public/index.css"

// createApp(App).mount('#app');

// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import "../public/index.css"
const app = createApp(App);
app.use(router);
app.mount('#app');

