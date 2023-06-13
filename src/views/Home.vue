<script setup>
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { useABDStore } from "../store";
import { useGetTopAlbums } from "../composables/topAlbums";

const store = useABDStore();
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

onBeforeMount(async () => {
    getTime();
    topAlbums.value = await getTopAlbums();
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

    h2 {
        color: #ffffff;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
}
</style>
