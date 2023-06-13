import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useABDStore = defineStore('main', () => {
    const currentBackgroundColor = ref("#0000001f");
    const gradientBackgroundColor = ref("linear-gradient(#f9f9f9 -40%, #000000 60%)");

    return {
        currentBackgroundColor,
        gradientBackgroundColor,
    };
});
