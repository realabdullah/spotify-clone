<script setup>
const props = defineProps({
    expanded: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <svg v-if="expanded" height="16" width="16" viewBox="0 0 16 16">
        <path d="M.47 4.97a.75.75 0 011.06 0L8 11.44l6.47-6.47a.75.75 0 111.06 1.06L8 13.56.47 6.03a.75.75 0 010-1.06z" fill="currentColor">
        </path>
    </svg>

    <svg v-else height="16" width="16" viewBox="0 0 16 16">
        <path d="M.47 11.03a.75.75 0 001.06 0L8 4.56l6.47 6.47a.75.75 0 101.06-1.06L8 2.44.47 9.97a.75.75 0 000 1.06z"
            fill="currentColor">
        </path>
    </svg>
</template>
