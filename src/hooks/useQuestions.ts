import {useState} from "react";
import {QUESTIONS} from "../assets/question.ts";
import {QuestionType} from "../type/question-type.ts";

export const useQuestions = () => {
    const [questions, setQuestions] = useState(QUESTIONS);
    const [backUpQuestions, setBackUpQuestions] = useState(questions.slice());

    const backUp = () => {
        setQuestions(backUpQuestions);
    }
    const updateBacUpQuestions = (oldQuestion: Array<QuestionType>) => {
        setBackUpQuestions(oldQuestion);
    }
    const addQuestions = (question: QuestionType) => {
        setQuestions([...questions, {
            id: `${(Math.random() * 1e8).toString(16)}`,
            text: question.text,
            trueAnswer: question.trueAnswer,
            answers: question.answers
        }]);
    }

    const removeQuestions = (id: string) => {
        setQuestions(questions.filter(question => question.id !== id));
    };

    const updateQuestions = (question: QuestionType) => {
        const newQuestions = questions;
        for (const quest of newQuestions) {
            if (quest.id === question.id) {
                quest.text = question.text
                quest.trueAnswer = question.trueAnswer
                quest.answers = question.answers
                break;
            }

        }
        setQuestions(newQuestions);
    };

    return {
        questions,
        addQuestions,
        removeQuestions,
        updateQuestions,
        backUp,
        updateBacUpQuestions
    };
};