import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Chart1 from "../views/Chart1.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			enterClass: "animate__animated animate__jackInTheBox",
			leaveClass: "",
		},
	},
	{
		path: "/chart1",
		component: Chart1,
		meta: {
			enterClass: "animate__animated animate__jackInTheBox",
			leaveClass: "",
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: routes,
	base: process.env.BASE_URL,
});

export default router;
