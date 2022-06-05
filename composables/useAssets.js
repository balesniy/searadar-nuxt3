export default function useAssets() {
    const svgs = import.meta.globEager('/src/assets/*.svg');
    const pngs = import.meta.globEager('/src/assets/*.png');
    const jpegs = import.meta.globEager('/src/assets/*.jpeg');

    return {
        aboutImage: svgs['/src/assets/aboutImage.svg']?.default,
        search: svgs['/src/assets/search.svg']?.default,
        info: pngs['/src/assets/info.png']?.default,
    };
}
