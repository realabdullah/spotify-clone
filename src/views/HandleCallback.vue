<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const authorizationCode = router.currentRoute.value.query.code;
localStorage.setItem('authorization_code', authorizationCode);
router.push('/')
</script>

<template>

</template>