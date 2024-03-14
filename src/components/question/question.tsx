import './question.scss';
import AnswerList from "../answer/answer-list.tsx";
import {shuffle} from "../features/helpers.ts";
import {QuestionType} from "../../type/question-type.ts";

export default function Question({numberQuestion, totalQuestions, question, checkingAnswer}: Readonly<{
    numberQuestion: number,
    totalQuestions: number,
    question: QuestionType,
    checkingAnswer: (answer: string) => void
}>) {

    return (<>
            <div className="quiz__heading">
                <h3> Вопрос {numberQuestion + 1}<span>/{totalQuestions}</span></h3>
            </div>
            <div className="quiz__container">
                <div className="quiz__container__question">
                    <p>{question.text}</p>
                </div>
                <AnswerList answers={shuffle(question.answers)}
                            checkingAnswer={checkingAnswer}/>
            </div>
        </>
    );
}