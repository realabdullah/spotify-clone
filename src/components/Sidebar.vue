<script setup>
	import { computed } from "vue";
	import { useRoute } from "vue-router";
	import HomeIcon from "./Icons/HomeIcon.vue";
	import SearchIcon from "./Icons/SearchIcon.vue";
	import LibraryIcon from "./Icons/LibraryIcon.vue";
	import Logo from "./Icons/Logo.vue";
	import CreatePlaylistIcon from "./Icons/CreatePlaylistIcon.vue";
	import LikedSongsIcon from "./Icons/LikedSongsIcon.vue";
	import YourEpisodesIcon from "./Icons/YourEpisodesIcon.vue";

	const route = useRoute();
	const routeName = computed(() => route.name);
</script>

<template>
	<div class="sidebar">
		<Logo />
		<ul class="sidebar__navs group_one">
			<li class="sidebar__navs-nav">
				<router-link to="/" :class="{ active: routeName === 'Home' }">
					<HomeIcon :active="routeName === 'Home'" />
					<span>Home</span>
				</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link
					to="/search"
					:class="{ active: routeName === 'Search' }"
				>
					<SearchIcon :active="routeName === 'Search'" />
					<span>Search</span>
				</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link
					to="/library/playlists"
					:class="{ active: routeName.includes('Library') }"
				>
					<LibraryIcon :active="routeName === 'Library'" />
					<span>Your Library</span>
				</router-link>
			</li>
		</ul>
		<ul class="sidebar__navs group_two">
			<li class="sidebar__navs-nav">
				<router-link to="">
					<CreatePlaylistIcon />
					<span>Create Playlist</span>
				</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="">
					<LikedSongsIcon />
					<span>Liked Songs</span>
				</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="">
					<YourEpisodesIcon />
					<span>Your Episodes</span>
				</router-link>
			</li>
		</ul>
		<ul class="sidebar__navs">
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
			<li class="sidebar__navs-nav">
				<router-link to="/">Playlist Name</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	ul,
	li {
		list-style: none;
	}

	.sidebar {
		position: fixed;
		width: 20%;
		height: 100vh;
		background: #000000;
		padding: 1.5rem;

		&__navs {
			&-nav {
				margin-bottom: 15px;

				a {
					display: flex;
					align-items: center;
					text-decoration: none;
					color: #b3b3b3;
					font-size: 1rem;
					font-weight: 600;

					&:hover {
						color: #ffffff;
					}

					span {
						padding-left: 15px;
					}
				}

				.active {
					color: #ffffff;
				}
			}
		}

		.group_one {
			margin: 24px 0;
		}

		.group_two {
			margin-bottom: 18px;
			border-bottom: 0.002rem solid #b3b3b3;
		}
	}
</style>
