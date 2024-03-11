import {useState} from "react";
import './input.scss';

export const Input = ({name, placeholder, text}: { name: string, placeholder: string, text: string }) => {
    const [inputText, setInputText] = useState(undefined);

    function handlerChange(ev: any) {
        setInputText(ev.currentTarget.value);
    }

    return (
        <input name={name} className="answer-text" placeholder={placeholder} type="text"
               value={inputText === "" ? inputText
                   : inputText ?? text} onChange={handlerChange} required/>
    );
}