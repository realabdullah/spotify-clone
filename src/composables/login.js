export function useLogin() {
	const login = () => {
		const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
		const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
		const scopes = ["user-read-private", "user-read-email"];
		const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
			REDIRECT_URI
		)}&scope=${encodeURIComponent(scopes.join(" "))}`;
		window.location.replace(authorizeUrl);
	};

	return {
		login,
	};
}
