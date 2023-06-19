import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('main', () => {
    const currentBackgroundColor = ref("#0000001f");
    const gradientBackgroundColor = ref("linear-gradient(#f9f9f9 -40%, #121212 60%)");
    const generalHeight = ref("84vh");
    const cardQuantity = ref(0);

    return {
        currentBackgroundColor,
        gradientBackgroundColor,
        generalHeight,
        cardQuantity,
    };
});
