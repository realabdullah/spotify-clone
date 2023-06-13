<script setup>
</script>

<template>
    <div class="view">
        <router-view />
    </div>

    <div class="mobile">
        <h1>Please view on a much larger screen(working on responsiveness 🫣).</h1>
    </div>
</template>

<style scoped>
.view {
    display: none;

    @media (min-width: 1800px) {
        display: block;
    }
}

.mobile {
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 1rem;

    @media (min-width: 1800px) {
        display: none;
    }
}
</style>