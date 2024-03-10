// Получаем имя папки проекта 
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`

export const path = {
    build: {
        fonts: `${buildFolder}/fonts/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
    },
    src: {
        fonts: `${srcFolder}/fonts/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{png, jpg, jpeg, gif, webp}`,
        png: `${srcFolder}/img/**/*.png`,
        jpg: `${srcFolder}/img/**/*.jpg`,
        jpeg: `${srcFolder}/img/**/*.jpeg`,
        svg: `${srcFolder}/img/**/*.svg`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg, jpeg, gif, webp, png, svg, ico}`
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
}