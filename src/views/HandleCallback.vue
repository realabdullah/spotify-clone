<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authorizationCode = router.currentRoute.value.query.code;

onMounted(async () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

    const data = {
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: REDIRECT_URI,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${window.btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams(data),
    };

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', options);
        console.log("response token => ", response);
        const json = await response.json();

        const newAccessToken = json.access_token;
        const refreshToken = json.refresh_token;

        localStorage.setItem('rscAccessToken', newAccessToken);
        localStorage.setItem('rscRefreshToken', refreshToken);
        router.push('/');
    } catch (error) {
        console.log("request error => ", error);
    }
});
</script>

<template>

</template>