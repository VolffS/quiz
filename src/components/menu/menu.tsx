import './menu.scss'
import {useState} from "react";
import {Btn} from "../button/btn.tsx";
import ModifyQuiz from "../modify-quiz/modify-quiz.tsx";

export function Menu({callback}: Readonly<{ callback: () => void }>) {
    const [stateChangeQuiz, setStateChangeQuiz] = useState(false);

    function changeQuiz() {
        setStateChangeQuiz(!stateChangeQuiz)
    }

    return (
        <div className="menu">
            {stateChangeQuiz
                ?<ModifyQuiz callback={changeQuiz}/>
                :<>
                    <Btn text={"Начать игру"} callback={callback}/>
                    <Btn text={"Изменить тест"} callback={changeQuiz}/>
                </>}
        </div>
    );
}

