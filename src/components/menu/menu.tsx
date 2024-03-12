import './menu.scss'
import {LinkRouter} from "../link-router/link-router.tsx";

export function Menu() {

    return (
        <div className="menu">
            <LinkRouter text={"Начать игру"} linkText={"/game-quiz"} />
            <LinkRouter text={"Изменить тест"} linkText={"/modify-quiz"} />
        </div>
    );
}

