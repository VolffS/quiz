import {Textarea} from "../textarea/textarea.tsx";
import {Input} from "../input/input.tsx";

export function AddQuestion() {
    return (
        <div className="modify__main">
            <input type="text" name="id" value=""
                   style={{display: "none"}} readOnly={true}/>
            <Textarea text="" id=""/>
            <div className="answer-text">
                <Input text="" name={"answer0"} placeholder="Ответ"/>
                <Input text="" name={"answer1"} placeholder="Ответ"/>
                <Input text="" name={"answer2"} placeholder="Ответ"/>
                <Input text="" name={"answer3"} placeholder="Ответ"/>
            </div>
        </div>
    );
}