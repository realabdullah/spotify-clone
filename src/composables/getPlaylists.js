import { inject } from "vue";

export function useGetPlaylists() {
	const $axios = inject("useAxios");

	const getPlaylists = async () => {
		const { data } = await $axios.get("/me/playlists");
        return data.items.map((playlist) => {
            return {
                id: playlist.id,
                name: playlist.name || "Untitled",
                link: playlist.href,
            };
        });
	};

	return { getPlaylists };
}
