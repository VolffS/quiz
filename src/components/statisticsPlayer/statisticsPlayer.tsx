import {Statistics} from "../quiz/quiz.tsx";
import './statisticsPlayer.scss'
import {gifResult} from "../../assets/result-gif.ts";
import {shuffle} from "../features/helpers.ts";
export function StatisticsPlayer({statistics, callback}: Readonly<{ statistics: Statistics, callback:()=> void }>) {
    console.log(gifResult)
    function getGifResult() {
        if (statistics.trueAnswers === statistics.numberQuestion ||
            statistics.trueAnswers === statistics.numberQuestion-1) {
            return shuffle(gifResult.goodResult)[0]
        }
        if (statistics.trueAnswers === 0) {
            return shuffle(gifResult.badResult)[0]
        }

        return shuffle(gifResult.middleResult)[0]
    }
    
    const gif = getGifResult()

    return (
        <div className="quiz__statistics-player">
            <h1>
                Набранные очки: {statistics.trueAnswers}<span>/{statistics.numberQuestion}</span>
            </h1>
            <div className="container__img">
                <img src={gif} alt=""/>
            </div>

            <button onClick={callback}>Меню</button>
        </div>
    );
}
