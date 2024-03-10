 export type QuestionType = {
    id: string;
    text: string;
    trueAnswer?:string;
    answers: Array<string>;
 }

 export const QUESTIONS : Array<QuestionType> = [
     {
         id: "1",
         text: "Кто убил Кенни?",
         trueAnswer: "Кенни",
         answers: ["Марк","Кенни","Оксимирон","Адам"]
     },
     {
         id: "2",
         text: "Кто написал трек: Кто убил Марка?",
         trueAnswer: "Оксимирон",
         answers: ["Три дня дождя","Pirocinesis","Оксимирон","Адам Денсон"]
     },
     {
         id: "3",
         text: "Уга буга?",
         trueAnswer: "Буга",
         answers: ["Уга","Буга","Уга буга","Буга уга"]
     },
     {
         id: "4",
         text: "Да?",
         trueAnswer: "Да",
         answers: ["Нет","Да"]
     }
 ]