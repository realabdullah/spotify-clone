<script setup>
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { useGetTopAlbums } from "../composables/topAlbums";

const greeting = ref("");
const topAlbums = ref([]);
const currentBackground = ref("linear-gradient(#f9f9f9 -40%, #000000 60%)");
const { getTopAlbums } = useGetTopAlbums();

const RecentlyPlayed = defineAsyncComponent(() =>
    import("../components/RecentlyPlayed.vue")
);

const SuggestedPlaylists = defineAsyncComponent(() =>
    import("../components/SuggestedPlaylists.vue")
);

const getTime = () => {
    const today = new Date();
    const time = today.getHours();
    if (time < 12) {
        greeting.value = "Good morning";
    } else if (time > 12 && time < 16) {
        greeting.value = "Good afternoon";
    } else if (time > 16) {
        greeting.value = "Good evening";
    }
};

const changeBackground = (background) => {
    currentBackground.value = background;
};

onBeforeMount(async () => {
    getTime();
    topAlbums.value = await getTopAlbums();
});
</script>

<template>
    <div class="home" :style="{ background: currentBackground }">
        <h2>{{ greeting }}</h2>

        <RecentlyPlayed :recently-played="topAlbums" @getBackground="changeBackground" />
        <Suspense>
            <template #default>
                <SuggestedPlaylists />
            </template>
        </Suspense>
    </div>
</template>

<style lang="scss" scoped>
.home {
    padding-top: 100px;
    padding-left: 22%;
    padding-right: 2rem;
    min-height: 100vh;

    h2 {
        color: #ffffff;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
}
</style>
