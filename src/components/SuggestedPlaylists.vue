<script setup>
import { useGetPlaylists } from "../composables/getPlaylists";

const { suggestPlaylist } = useGetPlaylists();
const { title, suggestedPlaylists } = await suggestPlaylist();
</script>

<template>
    <h4>{{ title }}</h4>

    <div class="playlists">
        <ul>
            <li v-for="playlist in suggestedPlaylists" :key="playlist.id">
                <div class="playlist__art">
                    <img :src="playlist.art" :alt="playlist.title">
                </div>
                <span class="playlist__title">{{ playlist.title }}</span>
                <a :href="playlist.ownerLink" class="playlist__artists">{{ playlist.owner }}</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
h4 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
}

.playlists {
    ul {
        li {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;

            .playlist__art {
                width: 50px;
                height: 50px;
                border-radius: 5px;
                overflow: hidden;
                margin-right: 1rem;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .playlist__title {
                font-size: 1rem;
                font-weight: 600;
                color: #ffffff;
                margin-right: 1rem;
            }

            .playlist__artists {
                font-size: 0.8rem;
                font-weight: 600;
                color: #b3b3b3;
                text-decoration: none;
            }
        }
    }
}
</style>
