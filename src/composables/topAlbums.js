import { inject } from "vue";

export function useGetTopAlbums() {
    const $axios = inject("useAxios");

    const getTopAlbums = async () => {
        const { data } = await $axios.get("me/player/recently-played?limit=6");
        return data.items.map((item) => {
            return {
                id: item.track.album.id,
                name: item.track.album.name,
                image: item.track.album.images[1].url,
            };
        });
    };

    return {
        getTopAlbums,
    };
}
