<script setup>
import GoBackIcon from "./Icons/GoBackIcon.vue";
import GoForwardIcon from "./Icons/GoForwardIcon.vue";
import DropdownIcon from "./Icons/DropdownIcon.vue";
import AccountNavIcon from "./Icons/AccountNavIcon.vue";
import SearchInputIcon from "./Icons/SearchInputIcon.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const router = useRouter();
const showDropdown = ref(false);
const userInfo = computed(() => {
	return store.state.userInfo;
});

const toggleDropdown = () => {
	showDropdown.value = !showDropdown.value;
};

const goBack = () => {
	router.go(-1);
};

const goForward = () => {
	router.go(1);
};
</script>

<template>
	<div class="header">
		<div class="left__nav">
			<div class="header__history">
				<button class="header__history-nav" @click="goBack">
					<GoBackIcon />
				</button>
				<button class="header__history-nav" @click="goForward">
					<GoForwardIcon />
				</button>
			</div>

			<div class="header__search">
				<label for="search">
					<SearchInputIcon />
					<input id="search" type="text" placeholder="What do you want to listen to?" />
				</label>
			</div>
		</div>

		<div class="header__user" @click="toggleDropdown">
			<button>
				<img :src="userInfo.images[0].url" :alt="userInfo.display_name" />
				<span>{{ userInfo.display_name }}</span>
				<DropdownIcon :show-dropdown="showDropdown" />
			</button>
		</div>

		<div v-show="showDropdown" class="user__dropdown">
			<a href="/" class="user__dropdown-item">
				Account
				<AccountNavIcon />
			</a>
			<a href="/"> Profile </a>
			<a href="/"> Settings </a>
			<a href="/"> Logout </a>
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

	.left__nav {
		display: flex;
		align-items: center;
		gap: 1rem;

		.header__history {
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

		.header__search {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 400px;

			label {
				display: flex;
				align-items: center;
				gap: 1rem;
				width: 100%;
				background: #ffffff;
				border-radius: 23px;
				padding: 0.7rem 1rem;
				color: #b3b3b3;

				input {
					background: transparent;
					border: none;
					color: #333333;
					font-size: 0.9rem;
					font-weight: 400;
					width: 100%;

					&:focus {
						outline: none;
					}
				}
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

	.user__dropdown {
		width: 200px;
		position: absolute;
		top: 4rem;
		right: 2rem;
		background: #282828;
		border-radius: 5px;
		padding: 0.3rem;
		display: flex;
		flex-direction: column;
		box-shadow: 0 16px 24px #0000004d, 0 6px 8px #00000033;
		z-index: 2;

		a {
			text-decoration: none;
			color: #b3b3b3;
			font-size: 1rem;
			font-weight: 600;
			cursor: pointer;
			padding: 0.7rem;
			border-radius: 3px;
			transition: all 0.2s ease-in-out;

			&:hover {
				background: #333333;
				color: #ffffff;
			}
		}

		&-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
}
</style>
