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

    const getNewReleases = () => {
        return $axios.get("browse/new-releases?limit=6").then(({ data }) => {
            return data.albums.items.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    art: item.images[1].url,
                    owner: item.artists[0].name,
                    ownerLink: item.artists[0].external_urls.spotify,
                };
            });
        });
    }

    return {
        getTopAlbums,
        getNewReleases,
    };
}
