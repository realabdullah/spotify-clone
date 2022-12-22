<script setup>
	import { onBeforeMount } from "vue";
	import { useRouter } from "vue-router";
    import { useRequestToken } from "../composables/useRequestToken";

	const router = useRouter();
    const { requestToken } = useRequestToken();

	onBeforeMount(async () => {
		try {
            await requestToken();
			router.push("/");
		} catch (error) {}
	});
</script>

<template></template>
