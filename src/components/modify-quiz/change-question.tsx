import {QuestionType} from "../../assets/question.ts";
import {Textarea} from "../textarea/textarea.tsx";
import {Input} from "../input/input.tsx";

export function ChangeQuestion({question}: Readonly<{ question: QuestionType }>) {
    return (
        <div className="modify__main">
            <input type="text" name="id" value={question.id}
                   style={{display: "none"}} readOnly={true}/>
            <Textarea text={question.text} id={question.id}/>
            <div className="answer-text">
                {question.answers.map((answer, index) =>
                    <Input key={(Math.random() * 1e8).toString(16)}
                           text={answer}
                           name={"answer" + index}
                           placeholder="Ответ"/>)}
            </div>
        </div>
    );
}