
type GifSType = Array<string>

type ResultGifsType = {
    goodResult:Array<string>;
    middleResult:Array<string>;
    badResult:Array<string>;
}


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