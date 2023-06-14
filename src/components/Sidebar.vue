<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useGetPlaylists } from "../composables/getPlaylists";
import HomeIcon from "./Icons/HomeIcon.vue";
import SearchIcon from "./Icons/SearchIcon.vue";
import LibraryIcon from "./Icons/LibraryIcon.vue";
import CreatePlaylistIcon from "./Icons/CreatePlaylistIcon.vue";
import LikedSongsIcon from "./Icons/LikedSongsIcon.vue";
import YourEpisodesIcon from "./Icons/YourEpisodesIcon.vue";

const route = useRoute();
const { getPlaylists } = useGetPlaylists();
const routeName = computed(() => route.name);

const playlists = await getPlaylists();
console.log(playlists)
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-routes">
            <router-link to="/" :class="{ active: routeName === 'Home' }">
                <HomeIcon :active="routeName === 'Home'" />
                <span>Home</span>
            </router-link>
            <router-link to="/search" :class="{ active: routeName === 'Search' }">
                <SearchIcon :active="routeName === 'Search'" />
                <span>Search</span>
            </router-link>
        </div>

        <div class="sidebar-library">
            <div class="sidebar-library__head">
                <button>
                    <LibraryIcon :active="true" />
                    <span>Your Library</span>
                </button>
            </div>

            <div class="sidebar-library__body">
                <router-link to="">
                    <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="liked" />
                    <span>Liked Songs</span>
                </router-link>
                <router-link to="">
                    <img src="https://misc.scdn.co/your-episodes/SE-64.png" alt="episodes">
                    <span>Your Episodes</span>
                </router-link>
                <a v-for="playlist in playlists" :key="playlist.id" :href="playlist.ownerLink" class="playlist">
                    <img :src="playlist.art" alt="art">
                    <div class="details">
                        <p>{{ playlist.name }}</p>
                        <div class="details-more">
                            <span>Playlist</span>
                            <span>•</span>
                            <span>{{ playlist.owner }}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ul,
li {
    list-style: none;
}

.sidebar {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    max-height: 84vh;

    &-routes {
        background: #121212;
        border-radius: 1rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        a {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #b3b3b3;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.2s ease-in-out;
            text-decoration: none;

            &:hover {
                color: #fff;
            }

            &.active {
                color: #fff;
            }
        }
    }

    &-library {
        background: #121212;
        border-radius: 1rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: auto;

        &__head {
            position: sticky;
            top: -25px;
            background: #121212;
            padding: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            z-index: 1;

            button {
                display: flex;
                align-items: center;
                gap: 1rem;
                color: #b3b3b3;
                font-size: 1rem;
                font-weight: 500;
                transition: all 0.2s ease-in-out;
                background: transparent;
                border: none;
                cursor: pointer;

                &:hover {
                    color: #fff;
                }
            }
        }

        &__body {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            a {
                display: flex;
                align-items: center;
                gap: 1rem;
                color: #b3b3b3;
                font-size: 1rem;
                font-weight: 500;
                transition: all 0.2s ease-in-out;
                text-decoration: none;

                &:hover {
                    color: #fff;
                }

                img {
                    width: 3rem;
                    height: 3rem;
                    object-fit: contain;
                    border-radius: 0.3rem;
                }
            }

            .playlist {
                display: flex;
                align-items: center;
                gap: 1rem;

                &:hover {
                    background: #282828;
                    padding: 0.5rem;
                    border-radius: 0.3rem;
                }

                img {
                    width: 3.2rem;
                    height: 3.2rem;
                    object-fit: contain;
                    border-radius: 0.3rem;
                }

                .details {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;

                    p {
                        font-size: 1rem;
                        font-weight: 500;
                        color: #fff;
                    }

                    .details-more {
                        display: flex;
                        align-items: center;
                        gap: 0.2rem;
                        font-size: 0.8rem;
                        color: #b3b3b3;
                    }
                }
            }
        }
    }
}
</style>
