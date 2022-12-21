<script setup>
import HomeIcon from './Icons/HomeIcon.vue';
import SearchIcon from './Icons/SearchIcon.vue';
import LibraryIcon from './Icons/LibraryIcon.vue';
import Logo from './Icons/Logo.vue';
import CreatePlaylistIcon from './Icons/CreatePlaylistIcon.vue';
import LikedSongsIcon from './Icons/LikedSongsIcon.vue';
import YourEpisodesIcon from './Icons/YourEpisodesIcon.vue';
</script>

<template>
    <div class="sidebar">
        <ul class="sidebar__navs group_one">
            <li class="sidebar__navs-nav">
                <router-link to="/home">
                    <HomeIcon />
                    <span>Home</span>
                </router-link>
            </li>
            <li class="sidebar__navs-nav">
                <router-link to="/search">
                    <SearchIcon />
                    <span>Search</span>
                </router-link>
            </li>
            <li class="sidebar__navs-nav">
                <router-link to="/library">
                    <LibraryIcon />
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
        <ul class="sidebar__navs group_one">
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
    width: 20rem;
    height: 100vh;
    background: #000000;
    padding: 1.5rem;
}
</style>