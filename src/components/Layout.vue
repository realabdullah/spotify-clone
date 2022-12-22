<script setup>
import { defineAsyncComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

const SideBar = defineAsyncComponent(() => import("./Sidebar.vue"));

const Header = defineAsyncComponent(() => import("./Header.vue"));

onBeforeMount(async () => {
    await store.dispatch("getUserInfo");
});
</script>

<template>
    <div>
        <SideBar />
        <Header />
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>
