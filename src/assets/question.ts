import {useState} from "react";

export type QuestionType = {
    id: string;
    text: string;
    trueAnswer?:string;
    answers: Array<string>;
 }
export type UseQuestionsType = {
    questions: Array<QuestionType>;
    addQuestions: (question: QuestionType) => void;
    removeQuestions: (id: string) => void;
    updateQuestions: (question: QuestionType) => void;
    updateBacUpQuestions: (question: Array<QuestionType>) => void;
    backUp: () => void;
}

 export const QUESTIONS : Array<QuestionType> = [
     {
         id: "1",
         text: "Кто убил Кенни?",
         trueAnswer: "Кенни",
         answers: ["Кенни","Марк","Оксимирон","Адам"]
     },
     {
         id: "2",
         text: "Кто написал трек: Кто убил Марка?",
         trueAnswer: "Оксимирон",
         answers: ["Оксимирон","Pirocinesis","Три дня дождя","Адам Денсон"]
     },
     {
         id: "3",
         text: "Уга буга?",
         trueAnswer: "Буга",
         answers: ["Буга","Уга","Уга буга","Буга уга"]
     },
     {
         id: "5",
         text: "Да?",
         trueAnswer: "Да",
         answers: ["Да","Нет"]
     }
 ]


export const useQuestions = () => {
     const [questions, setQuestions] = useState(QUESTIONS);
     const [backUpQuestions, setBackUpQuestions] = useState(questions.slice());

     const backUp = () => {
         setQuestions(backUpQuestions);
     }
     const updateBacUpQuestions = (oldQuestion : Array<QuestionType>) => {
         setBackUpQuestions(oldQuestion);
     }
     const addQuestions = (question : QuestionType) => {
         setQuestions([...questions, {
             id: `${(Math.random()*1e8).toString(16)}`,
             text: question.text,
             trueAnswer: question.trueAnswer,
             answers: question.answers}]);
     }

     // Функция для удаления задачи из списка по ее ID
     const removeQuestions = (id: string) => {
         setQuestions(questions.filter(question => question.id !== id));
     };

     const updateQuestions = (question : QuestionType) => {
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
