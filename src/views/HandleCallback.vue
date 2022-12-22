<script setup>
	import { onBeforeMount } from "vue";
	import { useRouter } from "vue-router";
    import { useRequestToken } from "../composables/requestToken";

	const router = useRouter();
    const { requestToken } = useRequestToken();

	onBeforeMount(async () => {
		try {
            await requestToken();
            if (localStorage.getItem("rscAccessToken")) {
                router.push("/");
            }
		} catch (error) {}
	});
</script>

<template></template>
