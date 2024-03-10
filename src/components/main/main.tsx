import './main.scss'
import Quiz from "../quiz/quiz.tsx";
import {useState} from "react";
import {Menu} from "../menu/menu.tsx";

export default function Main() {
    const [stateIsGame, setStateIsGame] = useState(false);
    
    function changeIsGame() {
        setStateIsGame(!stateIsGame)
    }
    
    return (
        <div className="container">
            {stateIsGame 
                ? <Quiz callback={changeIsGame} />
                : <Menu callback={changeIsGame}/>}
        </div>

    );
}