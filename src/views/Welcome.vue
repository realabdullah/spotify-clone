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

<style lang="scss" scoped>
button {
    background-color: #1DB954;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem 2rem;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;

    &:hover {
        background-color: #1ed760;
    }
}
</style>