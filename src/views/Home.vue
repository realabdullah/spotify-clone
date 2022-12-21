<script setup>
import { defineAsyncComponent } from 'vue';

const SideBar = defineAsyncComponent(() =>
    import('../components/Sidebar.vue')
);
</script>

<template>
    <SideBar />
</template>