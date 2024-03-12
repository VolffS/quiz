import './button.scss'
import {MouseEvent} from "react";
export function Btn({text, onBtnClick}: Readonly<{ text: string|number, onBtnClick: (ev: MouseEvent<HTMLButtonElement> ) => void }>) {

    return (
        <button type="button" className="btn-menu" onClick={onBtnClick} value={text}>{text}</button>
    );
}