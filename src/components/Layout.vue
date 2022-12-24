<script setup>
import { defineAsyncComponent } from "vue";

const SideBar = defineAsyncComponent(() => import("./Sidebar.vue"));

const Header = defineAsyncComponent(() => import("./Header.vue"));
</script>

<template>
    <div>
        <SideBar />
        <Suspense>
            <template #default>
                <Header />
            </template>
        </Suspense>
        <div class="view">
            <router-view />
        </div>
    </div>
</template>
