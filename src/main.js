import { createApp } from "vue";
import App from "./App.vue";
import CountryDetail from "./components/CountryDetail.vue";
import router from "./router.js";
import "../public/index.css";

const app = createApp(App);
app.component("CountryDetail", CountryDetail);
app.use(router);
app.mount("#app");
