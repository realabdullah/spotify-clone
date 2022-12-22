import { createRouter, createWebHistory } from "vue-router";

const checkAccess = (to, from, next) => {
	if (localStorage.getItem("rscAccessToken")) {
		next();
	} else {
		next("/welcome");
	}
};

const routes = [
	{
		path: "/",
		component: () => import("../components/Layout.vue"),
		beforeEnter: checkAccess,
		children: [
			{
				path: "",
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
				path: "/library/albums",
				name: "LibraryAlbums",
				component: () => import("../components/Album.vue"),
			},
			{
				path: "/library/playlists",
				name: "LibraryPlaylists",
				component: () => import("../components/Album.vue"),
			},
			{
				path: "/library/podcasts",
				name: "LibraryPodcasts",
				component: () => import("../components/Album.vue"),
			},
			{
				path: "/library/artists",
				name: "LibraryArtists",
				component: () => import("../components/Album.vue"),
			},
		],
	},
	{
		path: "/welcome",
		name: "Welcome",
		component: () => import("../views/Welcome.vue"),
	},
	{
		path: "/callback",
		name: "Callback",
		component: () => import("../views/HandleCallback.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
