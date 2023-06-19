<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useGetAlbum } from "../composables/getAlbum";
import { useGetImageColor } from "../composables/getImageColor";
import PlayIcon from "../components/Icons/PlayIcon.vue";
import MiniLikeIcon from "../components/Icons/MiniLikeIcon.vue";
import MoreIcon from "../components/Icons/MoreIcon.vue";
import DurationIcon from "../components/Icons/DurationIcon.vue";

const album = ref(null);
const duration = ref(0);
const route = useRoute();
const { fetchAlbumDetail } = useGetAlbum();
const { getImageColor } = useGetImageColor();

const albumId = computed(() => route.params.id);
const getYear = computed(() => {
    return (date) => {
        return parseInt(date.split("-")[0]);
    };
});

const totalDuration = computed(() => {
    return (time, mode) => {
        const seconds = Math.floor(time / 1000);
        const minutes = Math.floor(seconds / 60);

        if (minutes <= 59) {
            const remainingSeconds = seconds % 60;
            return mode === 'header' ? `${minutes} min ${remainingSeconds} sec` : `${minutes}:${remainingSeconds}`;
        } else if (minutes > 59) {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            return mode === 'header' ? `${hours} hr ${remainingMinutes} min` : `${hours}:${remainingMinutes}`;
        }
    }
})

onBeforeMount(async () => {
    try {
        const { data } = await fetchAlbumDetail(albumId.value);
        album.value = data;
        await getImageColor(album.value.images[2].url, 'album');
        const tracks = album.value.tracks.items;
        let i;
        for (i = 0; i <= tracks.length; i++) {
            duration.value += tracks[i].duration_ms;
        }
    } catch { }
});
</script>

<template>
    <div v-if="album" class="album">
        <div class="album__header">
            <img :src="album.images[0].url" :alt="album.name" />
            <div class="album__header-content">
                <span class="album__type">{{ album.album_type }}</span>
                <h3 class="album__title">{{ album.name }}</h3>
                <div class="album__attributions">
                    <a v-for="artist in album.artists" :key="artist.id"
                        :href="artist.external_urls.spotify">{{ artist.name }}</a>
                    <span>•</span>
                    <span class="album__year">{{ getYear(album.release_date) }}</span>
                    <span>•</span>
                    <span class="tracks__quantity">{{ album.total_tracks }}
                        {{ album.total_tracks > 1 ? "songs" : "song" }},</span>
                    <span class="album__duration">{{ totalDuration(duration, 'header') }}</span>
                </div>
            </div>
        </div>

        <div class="album__ctas">
            <button class="play">
                <PlayIcon />
            </button>
            <button class="like">
                <MiniLikeIcon />
            </button>
            <button class="more">
                <MoreIcon />
            </button>
        </div>

        <table>
            <thead>
                <tr>
                    <th colspan="3">#</th>
                    <th colspan="88">TITLE</th>
                    <th colspan="15">
                        <DurationIcon />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="song in album.tracks.items" :key="song.id" class="song__div">
                    <td colspan="3">{{ song.track_number }}</td>
                    <td colspan="88">
                        <span class="song__title">{{ song.name }}</span>
                        <br>
                        <div class="song__artists">
                            <a v-for="artist in song.artists" :key="artist.id" :href="artist.external_urls.spotify"
                                class="song__artist">{{ artist.name }},</a>
                        </div>
                    </td>
                    <td colspan="15">{{ totalDuration(song.duration_ms) }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<style lang="scss" scoped>
.album {
    padding-top: 2rem;
    padding-left: 1rem;

    &__header {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 1.5rem;

        img {
            width: 250px;
            height: 250px;
        }

        &-content {
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            .album__type {
                display: block;
                text-transform: uppercase;
                font-size: 0.8rem;
                font-weight: 700;
                margin-bottom: 0.6rem;
                color: #ffffff;
            }

            .album__title {
                font-size: 5rem;
                margin-bottom: 1.5rem;
                color: #ffffff;
            }

            .album__attributions {
                display: flex;
                align-items: center;
                gap: 0.35rem;

                a {
                    text-decoration: none;
                    color: #ffffff;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                span {
                    color: #ffffff;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .album__duration {
                    color: hsla(0, 0%, 100%, .7);
                    font-weight: 400;
                }
            }
        }
    }

    &__ctas {
        padding: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;

        button {
            border: none;
            background: none;
        }

        .play {
            background: #1db954;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease-in;

            &:hover {
                cursor: pointer;
                transform: scale(1.2);
            }
        }

        .like {
            color: #b3b3b3;

            &:hover {
                cursor: pointer;
                color: #ffffff;
            }

            svg {
                width: 30px;
                height: 30px;
            }
        }

        .more {
            @extend .like
        }
    }

    table {
        width: 100%;
        font-size: 14px;
        font-weight: 400;
    }

    tr {
        border: 0;
        display: block;
    }

    .song__div {
        padding: 5px;
        margin: 15px 0;

        &:hover {
            border-radius: 10px;
            background: rgb(57, 56, 56);
        }
    }

    th {
        text-align: left;
        border-bottom: 1px solid #ffffff1a;
        color: #b3b3b3;
        padding: 10px;
        width: 3%;
        padding-left: 40px;
    }

    th[colspan="88"] {
        width: 88%;
    }

    th[colspan="15"] {
        text-align: right;
        padding-right: 40px;
        width: 15%;
    }

    td {
        width: 3%;
        // padding: 10px;
        padding-left: 40px;
        // padding-top: 30px;
        color: #ffffff;
    }

    td[colspan="3"] {
        font-size: 1rem;
        font-weight: 400;
    }

    td[colspan="88"] {
        width: 88%;

        .song__title {
            font-size: 1rem;
            font-weight: 400;
            color: #ffffff;
        }

        .song__artists {
            display: flex;
            gap: 0.3rem;
            margin-top: 0.2rem;

            .song__artist {
                font-size: 0.9rem;
                font-weight: 400;
                color: #b3b3b3;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    td[colspan="15"] {
        text-align: right;
        width: 15%;
        padding-right: 40px;
        font-size: 1rem;
        font-weight: 400;
        color: #b3b3b3;
    }
}
</style>
