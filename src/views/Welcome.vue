<script setup>
import { useRouter } from 'vue-router';
import { useLogin } from '../composables/login';

const router = useRouter();
const { login } = useLogin();

if (localStorage.getItem('rscAccessToken')) {
    router.push('/');
}
</script>

<template>
    <button @click="login">Login with Spotify</button>
</template>