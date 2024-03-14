import "./answer.scss";
import AnswerButton from "./answerButton/answerButton.tsx";

export default function AnswerList({answers, checkingAnswer}: Readonly<{answers: Array<string>, checkingAnswer: (answer: string) => void }>) {
    return (
        <div className="quiz__container__answer">
            {answers.map(answer => <AnswerButton key={(Math.random()*1e8).toString(16)}
                                                 answer={answer}
                                                 onAnswerClick={checkingAnswer}/>)}
        </div>
    );
}