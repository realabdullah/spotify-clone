<script setup>
import PlayIcon from "../components/Icons/PlayIcon.vue";
import { ref, watchEffect } from "vue";
import { useStore } from "../store";
import { useGetPlaylists } from "../composables/getPlaylists";

const store = useStore();
const showPlayBtn = ref(false);
const hoveredPlaylist = ref(null);

const { suggestPlaylist } = useGetPlaylists();
const { title, suggestedPlaylists } = await suggestPlaylist();
const playlists = ref(suggestedPlaylists);

const handleMouseEnter = async (id) => {
    hoveredPlaylist.value = id;
    showPlayBtn.value = true;
};

const handleMouseLeave = () => {
    hoveredPlaylist.value = null;
    showPlayBtn.value = false;
};

watchEffect(() => {
    const playlistArray = suggestedPlaylists;
    playlists.value = playlistArray.slice(0, store.cardQuantity);
});
</script>

<template>
    <h4>{{ title }}</h4>

    <div class="playlists">
        <ul>
            <li v-for="playlist in playlists" :key="playlist.id" @mouseenter="handleMouseEnter(playlist.id)"
                @mouseleave="handleMouseLeave">
                <div class="playlist__art">
                    <img :src="playlist.art" :alt="playlist.title">
                    <transition name="playButton">
                        <button v-show="showPlayBtn && hoveredPlaylist === playlist.id" class="play_cta">
                            <PlayIcon />
                        </button>
                    </transition>
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
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
}

.playlists {
    ul {
        display: flex;
        align-items: center;
        gap: 1rem;

        li {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            width: 330px;
            padding: 1rem;
            background: #1e1e1e;
            border-radius: 5px;

            &:hover {
                cursor: pointer;
                background: #2e2e2e;
            }

            .playlist__art {
                width: 100%;
                height: 170px;
                margin-bottom: 0.7rem;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    object-fit: cover;
                }

                .play_cta {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    background: #1db954;
                    border: none;
                    cursor: pointer;
                    color: #000000;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.3s;

                    &:hover {
                        transform: scale(1.1);
                        background: #1dca5a;
                    }
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
                color: #b3b3b3;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

.playButton-enter-active {
    animation: slide-in-bottom 0.2s ease-in both;
}

.playButton-leave-active {
    transform: scale(0);
}

@keyframes slide-in-bottom {
    0% {
        transform: translateY(10px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
