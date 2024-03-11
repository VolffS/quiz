import "./answer.scss";
import AnswerButton from "./answerButton/answerButton.tsx";

export default function Answer({answers, callback}: Readonly<{answers: Array<string>, callback: (answer: string) => void }>) {
    return (
        <div className="quiz__container__answer">
            {answers.map(answer => <AnswerButton key={(Math.random()*1e8).toString(16)}
                                                 answer={answer}
                                                 callback={callback}/>)}
        </div>
    );
}