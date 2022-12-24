<script setup>
import { ref } from "vue";
import { useGetImageColor } from "../composables/getImageColor";
import PlayIcon from "../components/Icons/PlayIcon.vue";

const props = defineProps({
	recentlyPlayed: {
		type: Object,
		default: () => { },
	},
});

const emit = defineEmits(['getBackground']);

const showPlayBtn = ref(false);
const currentHoveredAlbum = ref(null);
const currentBackground = ref("");

const { getImageColor } = useGetImageColor();

const handleMouseEnter = async (id, url) => {
	currentHoveredAlbum.value = id;
	showPlayBtn.value = true;
	currentBackground.value = await getImageColor(url);
	emit("getBackground", currentBackground.value);
};

const handleMouseLeave = () => {
	currentHoveredAlbum.value = null;
	showPlayBtn.value = false;
};
</script>

<template>
	<div v-if="props.recentlyPlayed.length > 0" class="home__top-albums">
		<div v-for="(album, index) in props.recentlyPlayed" :key="index" class="home__top-albums__album"
			@mouseenter="handleMouseEnter(index, album.image)" @mouseleave="handleMouseLeave">
			<img :id="`image${index}`" :src="album.image" :alt="album.name" />
			<div class="home__top-albums__album-card">
				<h5>{{ album.name }}</h5>
				<button v-show="showPlayBtn && currentHoveredAlbum === index" class="play_cta">
					<PlayIcon />
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home__top-albums {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	// grid-template-rows: repeat(2, auto);

	&__album {
		height: 80px;
		background: hsla(0, 0%, 100%, 0.1);
		border-radius: 5px;
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 80px;
			height: 100%;
			object-fit: cover;
		}

		&-card {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			transition: all 0.3s ease-in-out;

			h5 {
				color: #ffffff;
				font-size: 1.5rem;
				font-weight: 600;
			}

			.play_cta {
				background: #1db954;
				border: none;
				cursor: pointer;
				color: #000000;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 1rem;
				transition: transform 0.3s;

				&:hover {
					transform: scale(1.2);
				}

				svg {
					width: 1.5rem;
					height: 1.5rem;
				}
			}
		}
	}
}
</style>
