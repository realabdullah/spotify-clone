import ColorThief from "/node_modules/colorthief/dist/color-thief.mjs";

export function useGetImageColor() {
    const getImageColor = async () => {
        const colorThief = new ColorThief();
        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src =
            "https://i.scdn.co/image/ab67616d00001e022875aeaaff6765aed2c98f31";
        await new Promise((resolve) => {
            image.onload = resolve;
        });
        const result = colorThief.getColor(image);
        const color = `rgb(${result.join(', ')})`;
        return `linear-gradient(180deg, ${color} -40%, #000000 60%)`
    };

    return { getImageColor };
}
