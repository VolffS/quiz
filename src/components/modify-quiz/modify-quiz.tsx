import {Btn} from "../button/btn.tsx";
import {UseQuestionsType} from "../../assets/question.ts";
import './modify-quiz.scss';
import {useState} from "react";
import {BtnSubmit} from "../button/btn-submit.tsx";
import {AddQuestion} from "./add-question.tsx";
import {ChangeQuestion} from "./change-question.tsx";

export default function ModifyQuiz({callback, useQuiz}: Readonly<{ callback: () => void, useQuiz: UseQuestionsType }>) {
    const [isAddQuestion, setIsAddQuestion] = useState(!useQuiz.questions.length);
    const [thisIdQuestion, setThisIdQuestion] = useState(0);
    let action = "";

    function modifyQuiz(form: any) {
        form.preventDefault();
        const formData = new FormData(form.currentTarget)
        const dataFrom = Object.fromEntries(formData);
        const question :any = {
            id: dataFrom.id,
            text: dataFrom.text,
            trueAnswer: dataFrom.answer0,
            answers: [dataFrom.answer0, dataFrom.answer1, dataFrom.answer2, dataFrom.answer3]
        };
        switch (action) {
            case "delete": {
                if (useQuiz.questions.length===1) {
                    setIsAddQuestion(true);
                }
                useQuiz.removeQuestions(question.id);
                break;
            }
            case "add": {
                useQuiz.addQuestions(question);
                setIsAddQuestion(false);
                break;
            }
            case "update": {
                useQuiz.updateQuestions(question);
                break;
            }
            default : {
                break;
            }
        }

    }
    function completionModify() {
        callback();
    }
    function nextQuestion(ev: any) {
        setThisIdQuestion(ev.currentTarget.textContent-1);
        setIsAddQuestion(false);
    }
    function canselModify() {
        useQuiz.backUp();
        callback();
    }

    function typ() {
        setIsAddQuestion(true);

        setThisIdQuestion(0);
    }

    return (
        <form onSubmit={modifyQuiz}>
            <div className="modify__heading">
                {useQuiz.questions.length === 0
                    ? ""
                    : useQuiz.questions.map((value, index) => <Btn
                    key={(Math.random() * 1e8).toString(16)+value.text}
                    text={++index}
                    callback={nextQuestion}/>)}
                <button type="button" className="btn-menu" onClick={typ}>+</button>
            </div>
            {isAddQuestion
                ? <AddQuestion />
                : <ChangeQuestion question={useQuiz.questions[thisIdQuestion]}/>}

            <div className="modify__footer">
                <Btn text={"Завершить"} callback={completionModify}/>
                <Btn text={"Отменить Всё"} callback={canselModify}/>
                {isAddQuestion
                    ? <BtnSubmit text={"Добавить"} callback={() => {action = "add"}}/>
                    : <BtnSubmit text={"Изменить"} callback={() => {action = "update"}}/>}
                {isAddQuestion ?"" : <BtnSubmit text="Удалить" callback={() => {action = "delete"}}/>}
            </div>
        </form>


    );
}
