import { useRouter } from "vue-router";
import { inject } from "vue";

export function useRequestToken() {
	const $axios = inject("useAxios");
	const router = useRouter();

	const clientId = import.meta.env.VITE_CLIENT_ID;
	const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
	const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

	const requestToken = async () => {
		const authorizationCode = router.currentRoute.value.query.code;

		const data = {
			grant_type: "authorization_code",
			code: authorizationCode,
			redirect_uri: REDIRECT_URI,
		};

		const options = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${window.btoa(
					`${clientId}:${clientSecret}`
				)}`,
			},
			body: new URLSearchParams(data),
		};

		const response = await $axios.post(
			"https://accounts.spotify.com/api/token",
			options
		);
		const { access_token, refresh_token } = await response.json();

		localStorage.setItem("rscAccessToken", access_token);
		localStorage.setItem("rscRefreshToken", refresh_token);
	};

	const refreshToken = async () => {
		const refreshToken = localStorage.getItem("rscRefreshToken");
		const data = {
			grant_type: "refresh_token",
			redirect_uri: refreshToken,
		};

		const options = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${window.btoa(
					`${clientId}:${clientSecret}`
				)}`,
			},
			body: new URLSearchParams(data),
		};

		const response = await $axios.post(
			"https://accounts.spotify.com/api/token",
			options
		);
		const { access_token } = response.data;

		localStorage.setItem("rscAccessToken", access_token);
	};

	return { requestToken, refreshToken };
}
