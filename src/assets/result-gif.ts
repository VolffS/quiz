import {GifSType} from "../type/gif-s-type.ts";
import {ResultGifsType} from "../type/result-gifs-type.ts";
import xqcXqcl from "./gif/xqc-xqcl.gif"
import catNod from "./gif/cat-nod.gif"
import nightcrawler from "./gif/nightcrawler-jake.gif"
import jakeGyllenhaal from "./gif/jake-gyllenhaal.gif"
import deadpDed from "./gif/deadp47-ded.gif"
import actually from "./gif/actually.gif"

const goodGifs: GifSType = [
    actually,
    deadpDed
];

const middleGifs: GifSType = [
    catNod,
    nightcrawler
];

const badGifs: GifSType = [
    jakeGyllenhaal,
    xqcXqcl
];

export const gifResult: ResultGifsType = {
    goodResult: goodGifs,
    middleResult: middleGifs,
    badResult: badGifs
};