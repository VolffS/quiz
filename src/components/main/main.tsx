import './main.scss'
import Quiz from "../quiz/quiz.tsx";
import {useState} from "react";
import {Menu} from "../menu/menu.tsx";
import {useQuestions} from "../../assets/question.ts";

export default function Main() {
    const [stateIsGame, setStateIsGame] = useState(false);
    const useQuiz = useQuestions();
    function changeIsGame() {
        setStateIsGame(!stateIsGame)
    }
    
    return (
        <div className="container">
            {stateIsGame 
                ? <Quiz callback={changeIsGame} useQuiz={useQuiz}  />
                : <Menu callback={changeIsGame} useQuiz={useQuiz}/>}
        </div>

    );
}