import './question.scss';
import {QuestionType} from "../../assets/question.ts";
import Answer from "../answer/answer.tsx";
import {shuffle} from "../features/helpers.ts";

export default function Question({numberQuestion, totalQuestions, question, callbackCheckAnswer}: Readonly<{
    numberQuestion: number,
    totalQuestions: number,
    question: QuestionType,
    callbackCheckAnswer: (answer: string) => void
}>) {

    return (<>
            <div className="quiz__heading">
                <h3> Вопрос {numberQuestion + 1}<span>/{totalQuestions}</span></h3>
            </div>
            <div className="quiz__container">
                <div className="quiz__container__question">
                    <p>{question.text}</p>
                </div>
                <Answer answers={shuffle(question.answers)}
                        callback={callbackCheckAnswer}/>
            </div>
        </>
    );
}