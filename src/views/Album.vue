<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useGetAlbum } from "../composables/getAlbum";
import { useGetImageColor } from "../composables/getImageColor";

const album = ref(null);
const background = ref("");
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
    return (time) => {
        const seconds = Math.floor(time / 1000);
        const minutes = Math.floor(seconds / 60);

        if (minutes <= 59) {
            const remainingSeconds = seconds % 60;
            return `${minutes} min ${remainingSeconds} sec`;
        } else if (minutes > 59) {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            return `${hours} hr ${remainingMinutes} min`;
        }
    }
})

onBeforeMount(async () => {
    try {
        const { data } = await fetchAlbumDetail(albumId.value);
        album.value = data;
        const tracks = album.value.tracks.items;
        let i;
        for (i = 0; i <= tracks.length; i++) {
            duration.value += tracks[i].duration_ms;
        }
        background.value = await getImageColor(album.value.images[2].url);
    } catch { }
});
</script>

<template>
    <div v-if="album" class="album" :style="{ background: background }">
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
                    <span class="album__duration">{{ totalDuration(duration) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.album {
    background: linear-gradient(#39314a -40%, #000000 60%);
    padding-top: 100px;
    padding-left: 22%;
    padding-right: 2rem;
    padding-bottom: 10rem;
    min-height: 100vh;

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
                gap: 0.7rem;

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
                    color: hsla(0,0%,100%,.7);
                    font-weight: 400;
                }
            }
        }
    }
}
</style>
