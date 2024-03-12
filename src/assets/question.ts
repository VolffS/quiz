import {QuestionType} from "../type/question-type.ts";

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


