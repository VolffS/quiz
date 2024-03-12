import { useForm, SubmitHandler } from "react-hook-form";
import {QuestionType} from "../../type/question-type.ts";
import {BtnSubmit} from "../button/btn-submit.tsx";
import {Action} from "../../assets/enum-action.ts";
import {LinkRouter} from "../link-router/link-router.tsx";

export const Form = ({question, isAddQuestion, onSubmitForm, cancelModify}: {question : QuestionType, isAddQuestion:boolean, onSubmitForm: (question:QuestionType, action: Action)=>void, cancelModify: () => void }) => {
    const { register, handleSubmit } = useForm<QuestionType>({
        defaultValues:{
            id: question.id,
            text: question.text,
            trueAnswer: question.trueAnswer,
            answers: question.answers
        }})
    const onSubmit: SubmitHandler<QuestionType> = (data:QuestionType) => {
        data.trueAnswer = data.answers[0];
        onSubmitForm(data, action);
        console.log(data)
    }
    let action: Action = Action.none;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modify__main">
                <textarea className="question-text"
                          placeholder="Крутой Вопрос" {...register("text", {required: true})} />

                <div className="answer-text">
                    {question.answers.map((answer, index) =>
                        <input className="answer-text"
                               key={index + answer} placeholder="Ответ" {...register(`answers.${index}`, {required: true})} />)}
                </div>
            </div>
            <div className="modify__footer">
                <LinkRouter text={"Завершить"} linkText={"/"} />
                <LinkRouter text={"Отменить всё"} linkText={"/"} onLinkClick={cancelModify} />
                {isAddQuestion
                    ? <BtnSubmit text={"Добавить"} onBtnClick={() => {
                        action = Action.Add;
                    }}/>
                    : <BtnSubmit text={"Изменить"} onBtnClick={() => {
                        action = Action.Update;
                    }}/>}
                {!isAddQuestion && <BtnSubmit text="Удалить" onBtnClick={() => {
                    action = Action.Delete;
                }}/>}
            </div>
        </form>
    )
}