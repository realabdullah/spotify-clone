import { inject } from "vue";

export function useGetUserInfo() {
    const $axios = inject("useAxios");

    const getUserInfo = async () => {
        const { data } = await $axios.get("/me");
        return data;
    };

    return { getUserInfo };
}
