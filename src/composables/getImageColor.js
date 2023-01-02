import ColorThief from "/node_modules/colorthief/dist/color-thief.mjs";
import { useStore } from "vuex";

export function useGetImageColor() {
	const store = useStore();
	const getImageColor = async (url) => {
		const colorThief = new ColorThief();
		const image = new Image();
		image.crossOrigin = "Anonymous";
		image.src = url;
		await new Promise((resolve) => {
			image.onload = resolve;
		});
		const result = colorThief.getColor(image);
		const color = `rgb(${result.join(", ")})`;
		store.commit("setCurrentBackgroundColor", color);
		return `linear-gradient(180deg, ${color} -40%, #000000 60%)`;
	};

	return { getImageColor };
}
