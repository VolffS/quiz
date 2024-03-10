import {Btn} from "../button/btn.tsx";
import {QUESTIONS} from "../../assets/question.ts";
import './modify-quiz.scss';

export default function ModifyQuiz({callback}: Readonly<{ callback: () => void }>) {
    let cansel = false;

    function ModifyQuiz(form: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) {
        form.preventDefault();
        const formData = new FormData(form.currentTarget)
        const dataFrom = Object.fromEntries(formData)
        console.log(dataFrom)
        console.log("QUESTIONS");
        const question = {
            id: `${(Math.random()*1e8).toString(16)}`,
            text: dataFrom.text,
            trueAnswers: dataFrom.answer1,
            answers: [dataFrom.answer1, dataFrom.answer2, dataFrom.answer3, dataFrom.answer3]
        };
        if (cansel) {
            if (cansel) {
                QUESTIONS.push(question);
                callback();
                cansel=false;
            } else {

                callback();
                cansel=false;
            }
        }

    }

    return (
        <form onSubmit={ModifyQuiz}>
            <div className="modify__heading">
                <button type="submit"></button>
                <Btn text={"1"} callback={()=>{}}/>
                <Btn text={"2"} callback={() => {
                }}/>
            </div>
            <div className="modify__main">
                <textarea className="question-text" name="text" placeholder="Крутой Вопрос" required></textarea>
                <div className="answer-text">
                    <input name="answer1" className="answer-text" placeholder="Ответ Правельный" type="text" required/>
                    <input name="answer2" className="answer-text" placeholder="Ответ Не правильный" type="text" required/>
                    <input name="answer3" className="answer-text" placeholder="Ответ Не правильный" type="text" required/>
                    <input name="answer4" className="answer-text" placeholder="Ответ Не правильный" type="text" required/>
                </div>
            </div>
            <div className="modify__footer">
                <button className="btn-menu" type="submit" onClick={()=>{cansel=true}}>Завершить</button>
                <Btn text={"Отмена"} callback={callback}/>
            </div>
        </form>


    );
}