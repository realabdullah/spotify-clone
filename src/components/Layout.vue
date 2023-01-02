<script setup>
import { defineAsyncComponent, ref, computed } from "vue";
import { useGetCurrentPlaying } from "../composables/getCurrentPlaying";

const floatPlayerData = ref(null);
const { getCurrentPlaying } = useGetCurrentPlaying();

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
    <div>
        <Suspense>
            <template #default>
                <SideBar />
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <Header />
            </template>
        </Suspense>
        <FloatPlayer v-if="floatPlayerData" :current-data="currentData" />
        <div class="view">
            <router-view />
        </div>
    </div>
</template>
