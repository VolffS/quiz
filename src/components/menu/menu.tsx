import './menu.scss'
import {useState} from "react";
import {Btn} from "../button/btn.tsx";
import ModifyQuiz from "../modify-quiz/modify-quiz.tsx";
import { UseQuestionsType} from "../../assets/question.ts";

export function Menu({callback, useQuiz}: Readonly<{ callback: () => void, useQuiz: UseQuestionsType }>) {
    const [stateChangeQuiz, setStateChangeQuiz] = useState(false);

    function changeQuiz() {
        setStateChangeQuiz(!stateChangeQuiz);
    }

    return (
        <div className="menu">
            {stateChangeQuiz
                ?<ModifyQuiz callback={changeQuiz} useQuiz={useQuiz}/>
                :<>
                    <Btn text={"Начать игру"} callback={callback}/>
                    <Btn text={"Изменить тест"} callback={()=>{
                        changeQuiz();
                        useQuiz.updateBacUpQuestions(useQuiz.questions)}}/>
                </>}
        </div>
    );
}

