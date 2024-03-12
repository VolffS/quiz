import {GifSType} from "../type/gif-s-type.ts";
import {ResultGifsType} from "../type/result-gifs-type.ts";

const goodGifs: GifSType = [
    "./actually.gif",
    "./deadp47-ded.gif"
];

const middleGifs: GifSType = [
    "./cat-nod.gif",
    "./nightcrawler-jake.gif"
];

const badGifs: GifSType = [
    "./jake-gyllenhaal.gif",
    "./xqc-xqcl.gif"
];

export const gifResult: ResultGifsType = {
    goodResult: goodGifs,
    middleResult: middleGifs,
    badResult: badGifs
};