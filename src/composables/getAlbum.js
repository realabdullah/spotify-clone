import { inject } from "vue";

export function useGetAlbum() {
	const $axios = inject("useAxios");

	const fetchAlbumDetail = async (id) => {
		const url = `/albums/${id}`;
		return $axios.get(url);
	};

	return { fetchAlbumDetail };
}
