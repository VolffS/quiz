import './quiz.scss';
import {useState} from "react";
import {QUESTIONS} from "../../assets/question.ts";
import Question from "../question/question.tsx";
import {StatisticsPlayer} from "../statisticsPlayer/statisticsPlayer.tsx";

export type Statistics = {
    trueAnswers: number,
    numberQuestion: number,
}
const statistics : Statistics = {
    trueAnswers: 0,
    numberQuestion: 0,
}
export default function Quiz({callback}: Readonly<{callback:()=> void }>) {
    const quiz = QUESTIONS;
    const [stateStatistics, setStateStatistics] = useState(statistics);

    function checkAnswer(answer : string) {

        if (answer === quiz[stateStatistics.numberQuestion].trueAnswer){
            setStateStatistics(prevState => ({
                trueAnswers: prevState.trueAnswers+1,
                numberQuestion: prevState.numberQuestion+1
            }));
        } else {
            setStateStatistics(prevState => ({
                ...prevState,
                numberQuestion: prevState.numberQuestion+1
            }));
        }
    }

    return (<div className="quiz">
            {stateStatistics.numberQuestion >= quiz.length
                ? <StatisticsPlayer statistics={stateStatistics} callback={callback}/>
                : <Question numberQuestion={stateStatistics.numberQuestion}
                        totalQuestions={quiz.length}
                        question={quiz[stateStatistics.numberQuestion]}
                        callbackCheckAnswer={checkAnswer}/>}
        </div>
    );
}

