import ColorThief from "/node_modules/colorthief/dist/color-thief.mjs";
import { useStore } from "../store";

export function useGetImageColor() {
	const store = useStore();
	const getImageColor = async (url, mode) => {
		const colorThief = new ColorThief();
		const image = new Image();
		image.crossOrigin = "Anonymous";
		image.src = url;
		await new Promise((resolve) => {
			image.onload = resolve;
		});
		const result = colorThief.getColor(image);
		const color = `rgb(${result.join(", ")})`;
        let gradientBackgroundColor = "";
		if (mode === 'album') {
			gradientBackgroundColor = `linear-gradient(180deg, ${color} 0%, #121212 40%)`;
		} else {
			gradientBackgroundColor = `linear-gradient(180deg, ${color} -40%, #121212 60%)`;
		}
        store.gradientBackgroundColor = gradientBackgroundColor;
	};

	return { getImageColor };
}
