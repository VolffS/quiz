import './answerButton.scss'
export default function AnswerButton({answer, callback}: Readonly<{ answer: string, callback: (answer: string) => void }>) {
    return (
        <button className="quiz__container__answer-btn" value={answer} onClick={(ev) => {
            callback(ev.currentTarget.value)
        }}>{answer}</button>
    );
}