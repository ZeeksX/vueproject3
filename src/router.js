import { createRouter, createWebHistory } from "vue-router";
import CountryDetail from "./components/CountryDetail.vue";

const routes = [
	// Other routes
	{
		path: "/country/:countryName",
		name: "CountryDetail",
		component: CountryDetail,
		props: true, // Pass route params as props
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
