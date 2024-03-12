import './quiz.scss';
import {useState} from "react";
import Question from "../question/question.tsx";
import {StatisticsPlayer} from "../statisticsPlayer/statisticsPlayer.tsx";
import {QuestionType} from "../../type/question-type.ts";

export type Statistics = {
    trueAnswers: number,
    numberQuestion: number,
}
const statistics : Statistics = {
    trueAnswers: 0,
    numberQuestion: 0,
}
export default function Quiz({questions}: Readonly<{questions: Array<QuestionType> }>) {
    const [stateStatistics, setStateStatistics] = useState(statistics);
    function checkAnswer(answer : string) {

        if (answer === questions[stateStatistics.numberQuestion].trueAnswer){
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
            {stateStatistics.numberQuestion >= questions.length
                ? <StatisticsPlayer statistics={stateStatistics}/>
                : <Question numberQuestion={stateStatistics.numberQuestion}
                        totalQuestions={questions.length}
                        question={questions[stateStatistics.numberQuestion]}
                            checkingAnswer={checkAnswer}/>}
        </div>
    );
}

