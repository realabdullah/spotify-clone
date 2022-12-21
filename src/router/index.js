import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Welcome",
		component: () => import("../views/Welcome.vue"),
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/search",
		name: "Search",
		component: () => import("../views/Search.vue"),
	},
	{
		path: "/library",
		name: "Library",
		component: () => import("../views/Library.vue"),
	},
	{
		path: "/playing",
		name: "Playing",
		component: () => import("../components/NowPlaying.vue"),
	},
	{
		path: "/callback",
		name: "Callback",
		component: () => import("../views/HandleCallback.vue"),
	},
	// {
	//   path: '/album',
	//   name: 'Album',
	//   component: Album
	// }
	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
