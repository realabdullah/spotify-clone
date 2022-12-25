import { inject } from "vue";

export function useGetCurrentPlaying() {
    const $axios = inject("useAxios");

    const getCurrentPlaying = async () => {
        const { data: currentPlaying } = await $axios.get("/me/player");
        return {
            id: currentPlaying.item.id,
            name: currentPlaying.item.name,
            progress: currentPlaying.progress_ms,
            duration: currentPlaying.item.duration_ms,
            is_playing: currentPlaying.is_playing,
            artist: currentPlaying.item.album.artists[0].name,
            artist_url: currentPlaying.item.album.artists[0].external_urls.spotify,
            track_url: currentPlaying.item.album.external_urls.spotify,
            album_art: currentPlaying.item.album.images[2].url,
            expanded_art: currentPlaying.item.album.images[1].url,
            shuffle: currentPlaying.shuffle_state,
            repeat: currentPlaying.repeat_state,
            device_active: currentPlaying.device.is_active,
            device_name: currentPlaying.device.name,
            device_volume: currentPlaying.device.volume_percent,
        };
    };

    return { getCurrentPlaying };
}