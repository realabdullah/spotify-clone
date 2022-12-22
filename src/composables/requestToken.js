import { useRouter } from "vue-router";

export function useRequestToken() {
	const router = useRouter();
	const authorizationCode = router.currentRoute.value.query.code;

	const requestToken = async () => {
		const clientId = import.meta.env.VITE_CLIENT_ID;
		const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
		const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

		const data = {
			grant_type: "authorization_code",
			code: authorizationCode,
			redirect_uri: REDIRECT_URI,
		};

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${window.btoa(
					`${clientId}:${clientSecret}`
				)}`,
			},
			body: new URLSearchParams(data),
		};

		const response = await fetch(
			"https://accounts.spotify.com/api/token",
			options
		);
		const json = await response.json();

		const newAccessToken = json.access_token;
		const refreshToken = json.refresh_token;

		localStorage.setItem("rscAccessToken", newAccessToken);
		localStorage.setItem("rscRefreshToken", refreshToken);
	};

	return { requestToken };
}
