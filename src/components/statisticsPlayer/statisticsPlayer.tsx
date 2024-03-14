import {Statistics} from "../quiz/quiz.tsx";
import './statisticsPlayer.scss'
import {gifResult} from "../../assets/result-gif.ts";
import {shuffle} from "../features/helpers.ts";
import {LinkRouter} from "../link-router/link-router.tsx";
export function StatisticsPlayer({statistics}: Readonly<{ statistics: Statistics }>) {
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

    return (
        <div className="quiz__statistics-player">
            <h1>
                Набранные очки: {statistics.trueAnswers}<span>/{statistics.numberQuestion}</span>
            </h1>
            <div className="container__img">
                <img src={getGifResult()} alt=""/>
            </div>

            <LinkRouter text={"Меню"} linkText={"/"} />
        </div>
    );
}
