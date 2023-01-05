import { useRouter } from "vue-router";

export function useRequestToken() {
    const router = useRouter();

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

    const requestToken = async () => {
        const authorizationCode = router.currentRoute.value.query.code;
        if (!authorizationCode) return;
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
        const { access_token, expires_in, refresh_token } = await response.json();

        const rscTokenExpiry = Date.now() + (expires_in - 400) * 3600;
        localStorage.setItem("rscTokenExpiry", rscTokenExpiry);
        localStorage.setItem("rscAccessToken", access_token);
        localStorage.setItem("rscRefreshToken", refresh_token);
    };

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem("rscRefreshToken");
        const data = {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
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
        const { access_token, expires_in } = await response.json();
        const rscTokenExpiry = Date.now() + (expires_in - 400) * 3600;
        localStorage.setItem("rscTokenExpiry", rscTokenExpiry);
        localStorage.setItem("rscAccessToken", access_token);
    };

    return { requestToken, refreshToken };
}
