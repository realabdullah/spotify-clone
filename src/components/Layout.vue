<script setup>
import { defineAsyncComponent, ref, computed, watchEffect } from "vue";
import { useStore } from "../store";
import { useGetCurrentPlaying } from "../composables/getCurrentPlaying";

const store = useStore();
const floatPlayerData = ref(null);
const { getCurrentPlaying } = useGetCurrentPlaying();
const background = ref("");

watchEffect(() => {
    background.value = store.gradientBackgroundColor;
})
const currentData = computed(() => {
    return floatPlayerData.value;
})

const SideBar = defineAsyncComponent(() => import("./Sidebar.vue"));
const Header = defineAsyncComponent(() => import("./Header.vue"));
const FloatPlayer = defineAsyncComponent(() => import("./FloatPlayer.vue"));

setInterval(async () => {
    try {
        floatPlayerData.value = await getCurrentPlaying();
    } catch (error) { }
}, 1000);
</script>

<template>
    <div class="container">
        <div class="view">
            <Suspense>
                <template #default>
                    <SideBar />
                </template>
            </Suspense>
            <div class="main" :style="`background: ${background}`">
                <Suspense>
                    <template #default>
                        <Header />
                    </template>
                </Suspense>
                <div class="main-view">
                    <router-view />
                </div>
            </div>
        </div>
        <FloatPlayer v-if="floatPlayerData" :current-data="currentData" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .view {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 0.5rem;
        padding: 1rem;
        height: 100%;
        max-height: 85vh;

        .main {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            background-color: #121212;
            border-radius: 1rem;
            height: 100%;
            max-height: 84vh;

            &-view {
                overflow-y: scroll;
            }
        }
    }
}
</style>