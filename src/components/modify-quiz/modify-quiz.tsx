import './modify-quiz.scss';
import {Btn} from "../button/btn.tsx";
import { MouseEvent, useState} from "react";
import {Form} from "./form.tsx";
import {UseQuestionsType} from "../../type/use-questions-type.ts";
import {QuestionType} from "../../type/question-type.ts";
import {Action} from "../../assets/enum-action.ts";
const emptyQuestion: QuestionType = {
    id: "",
    text: "",
    trueAnswer: "",
    answers: ["", "","", ""]
};

export default function ModifyQuiz({useQuiz}: Readonly<{ useQuiz: UseQuestionsType }>) {
    const [isAddQuestion, setIsAddQuestion] = useState(!useQuiz.questions.length);
    const [thisIndexQuestion, setThisIndexQuestion] = useState(0);

    function modifyQuiz(question:QuestionType, action: Action) {
        switch (action) {
            case Action.Delete: {
                deleteQuestion();
                break;
            }
            case Action.Add: {
                addQuestion();
                break;
            }
            case Action.Update: {
                updateQuestion();
                break;
            }
            default : {
                break;
            }
        }

        function addQuestion() {
            useQuiz.addQuestions(question);
            setIsAddQuestion(false);
        }
        function deleteQuestion() {
            if (useQuiz.questions.length === 1) {
                setIsAddQuestion(true);
            }
            useQuiz.removeQuestions(question.id);
            setThisIndexQuestion(0);
        }
        function updateQuestion() {
            useQuiz.updateQuestions(question);
        }
    }
    function cancelModify():void {
        useQuiz.backUp();
    }


    function changeIsAddQuestion() {
        setIsAddQuestion(true);
    }
    function nextQuestion(event : MouseEvent<HTMLButtonElement> ) {
        setThisIndexQuestion(+event.currentTarget.value - 1);
        setIsAddQuestion(false);
    }

    return (
        <div className="modify-questions">
            <div className="modify__heading">
                {useQuiz.questions.length !== 0 &&
                    useQuiz.questions.map((value, index) =>
                        <Btn
                            key={(Math.random() * 1e8).toString(16) + value.text}
                            text={++index}
                            onBtnClick={nextQuestion}
                        />)}
                <button type="button" className="btn-menu" onClick={changeIsAddQuestion}>+</button>
            </div>
            <Form key={isAddQuestion ?"new" :useQuiz.questions[thisIndexQuestion].id}
                  question={ isAddQuestion ? emptyQuestion : useQuiz.questions[thisIndexQuestion]}
                  onSubmitForm={modifyQuiz}
                  cancelModify={cancelModify}
                  isAddQuestion={isAddQuestion}
            />
        </div>
    );
}
