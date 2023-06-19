<script setup>
import { defineAsyncComponent, onBeforeMount, ref, onBeforeUnmount } from "vue";
import { useStore } from "../store";
import { useGetTopAlbums } from "../composables/topAlbums";

const store = useStore();
const greeting = ref("");
const topAlbums = ref([]);
const { getTopAlbums } = useGetTopAlbums();

const RecentlyPlayed = defineAsyncComponent(() =>
    import("../components/RecentlyPlayed.vue")
);

const SuggestedPlaylists = defineAsyncComponent(() =>
    import("../components/SuggestedPlaylists.vue")
);

const UserPlaylists = defineAsyncComponent(() =>
    import("../components/UserPlaylists.vue")
);

const NewReleases = defineAsyncComponent(() => 
    import("../components/NewReleases.vue")
);

const getTime = () => {
    const today = new Date();
    const time = today.getHours();
    if (time < 12) {
        greeting.value = "Good morning";
    } else if (time >= 12 && time < 16) {
        greeting.value = "Good afternoon";
    } else if (time > 16) {
        greeting.value = "Good evening";
    }
};

// trim playlists based on screen size
const trimCardQuantities = () => {
    if (window.innerWidth <= 1100) {
       store.cardQuantity = 2;
    } else if (window.innerWidth <= 1200) {
       store.cardQuantity = 3;
    } else if (window.innerWidth <= 1500) {
       store.cardQuantity = 4;
    } else if (window.innerWidth <= 1700) {
         store.cardQuantity = 5;
    } else {
       store.cardQuantity = 6;
    }
};

onBeforeMount(async () => {
    getTime();
    topAlbums.value = await getTopAlbums();
    trimCardQuantities();

    window.addEventListener("resize", () => {
        trimCardQuantities();
    });
});

// stop listening to resize event when component is unmounted
onBeforeUnmount(() => {
    window.removeEventListener("resize", trimCardQuantities);

    // reset card quantity to infinity
    store.cardQuantity = Infinity;
});
</script>

<template>
    <div class="home">
        <h2>{{ greeting }}</h2>

        <RecentlyPlayed :recently-played="topAlbums" />
        <Suspense>
            <template #default>
                <SuggestedPlaylists />
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <UserPlaylists />
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <NewReleases />
            </template>
        </Suspense>
    </div>
</template>

<style lang="scss" scoped>
.home {
    max-width: 1500px;
    margin: 0 auto;

    h2 {
        color: #ffffff;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
}
</style>
