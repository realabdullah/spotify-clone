<script setup>
import { useRouter } from 'vue-router';
import { useLogin } from '../composables/login';

const router = useRouter();
const { login } = useLogin();

if (localStorage.getItem('authorization_code')) {
    router.push('/home');
}
</script>

<template>
    <button @click="login">Login with Spotify</button>
</template>