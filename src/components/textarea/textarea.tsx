import {useState} from "react";
import './textarea.scss';

export function Textarea({text, id}: Readonly<{ text: string, id: string }>) {
    const [inputText, setInputText] = useState({text: undefined, id: id});

    if (inputText.id !== id) {
        setInputText(prevState => ({
            ...prevState,
            text: undefined,
            id: id
        }));
    }

    function handlerChange(ev: any) {
        const text = ev.currentTarget.value
        setInputText({
                text: text,
                id: inputText.id
        });
    }

    return (
        <textarea className="question-text" name="text" placeholder={"Крутой Вопрос"}
                  value={
                      inputText.text ?? text} onChange={handlerChange} required></textarea>
    );
}