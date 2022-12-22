<script setup>
const props = defineProps({
    showDropdown: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <svg v-if="showDropdown" height="16" width="16" viewBox="0 0 16 16">
        <path d="M14 10L8 4l-6 6h12z" fill="#ffffff"></path>
    </svg>

    <svg v-else height="16" width="16" viewBox="0 0 16 16">
        <path d="M14 6l-6 6-6-6h12z" fill="#ffffff"></path>
    </svg>
</template>
