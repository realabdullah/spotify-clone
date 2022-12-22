<script setup>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const topAlbums = computed(() => {
    return store.state.topPlayed;
});

onBeforeMount(async () => {
    await store.dispatch("getTopPlayed");
});
</script>

<template></template>
