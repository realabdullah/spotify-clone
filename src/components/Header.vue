<script setup>
	import GoBackIcon from "./Icons/GoBackIcon.vue";
	import GoForwardIcon from "./Icons/GoForwardIcon.vue";
	import DropdownIcon from "./Icons/DropdownIcon.vue";
	import { inject, onBeforeMount, ref } from "vue";

	const userInfo = ref({});
	const $axios = inject("useAxios");

	const getUserInfo = async () => {
		try {
			const { data } = await $axios.get("/me");
			userInfo.value = data;
		} catch (error) {}
	};

	onBeforeMount(() => {
		getUserInfo();
	});
</script>

<template>
	<div class="header">
		<div class="header__history">
			<button class="header__history-nav">
				<GoBackIcon />
			</button>
			<button class="header__history-nav">
				<GoForwardIcon />
			</button>
		</div>

		<div class="header__user">
			<button>
				<img
					:src="userInfo.images[0].url"
					:alt="userInfo.display_name"
				/>
				<span>{{ userInfo.display_name }}</span>
				<DropdownIcon />
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		left: 20%;
		right: 0;
		background: #0000001f;
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1;

		&__history {
			display: flex;
			align-items: center;
			gap: 1rem;

			&-nav {
				background: #000000;
				border: none;
				border-radius: 50%;
				width: 40px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				transition: all 0.2s ease-in-out;
				color: #ffffff;

				&:hover {
					background: #000000b3;
				}

				&:focus {
					outline: none;
				}
			}
		}

		&__user {
			button {
				background: #000000;
				border: none;
				border-radius: 23px;
				padding: 0.2rem;
				cursor: pointer;
				transition: all 0.2s ease-in-out;
				display: flex;
				align-items: center;
				gap: 7px;

				&:hover {
					background: #000000b3;
				}

				&:focus {
					outline: none;
				}

				img {
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
				}

				span {
					color: #b3b3b3;
					font-size: 1rem;
					font-weight: 600;
				}

				svg {
					margin-right: 5px;
				}
			}
		}
	}
</style>
