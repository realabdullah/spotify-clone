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
                art: playlist.images[0]?.url || "https://via.placeholder.com/150",
                owner: playlist.owner.display_name,
                ownerLink: playlist.owner.external_urls.spotify,
            };
        });
    };

    const suggestPlaylist = async () => {
        const { data } = await $axios.get("/browse/featured-playlists?limit=6&country=NG");
        const { message: title, playlists } = data;
        const suggestedPlaylists = playlists.items.map((playlist) => {
            return {
                id: playlist.id,
                title: playlist.name,
                art: playlist.images[0].url,
                owner: playlist.owner.display_name,
                ownerLink: playlist.owner.external_urls.spotify,
            }
        });

        return { title, suggestedPlaylists };
    }

    return { getPlaylists, suggestPlaylist };
}
