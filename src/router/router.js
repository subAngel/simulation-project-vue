import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Chart1 from "../views/Chart1.vue";
import Datatable from "../views/Datatable.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
	{
		path: "/:catchAll(.*)",
		component: NotFoundPage,
	},
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			enterClass: "animate__animated animate__bounceIn",
			leaveClass: "",
		},
	},
	{
		path: "/chart1",
		component: Chart1,
		meta: {
			enterClass: "animate__animated animate__bounceIn",
			leaveClass: "",
		},
	},
	{
		path: "/datatable1",
		component: Datatable,
		meta: {
			enterClass: "animate__animated animate__bounceIn",
			leaveClass: "",
		},
	},
];

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	// routes,
	// base: import.meta.env.BASE_URL,
	history: createWebHistory(),
	routes,
});

export default router;
