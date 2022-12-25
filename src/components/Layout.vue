<script setup>
import { defineAsyncComponent } from "vue";

const SideBar = defineAsyncComponent(() => import("./Sidebar.vue"));
const Header = defineAsyncComponent(() => import("./Header.vue"));
const FloatPlayer = defineAsyncComponent(() => import("./FloatPlayer.vue"));
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
        <FloatPlayer />
        <div class="view">
            <router-view />
        </div>
    </div>
</template>
