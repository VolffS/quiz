import './answerButton.scss'
export default function AnswerButton({answer, onAnswerClick}: Readonly<{ answer: string, onAnswerClick: (answer: string) => void }>) {
    return (
        <button className="quiz__container__answer-btn" value={answer} onClick={(ev) => {
            onAnswerClick(ev.currentTarget.value)
        }}>{answer}</button>
    );
}