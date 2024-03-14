import {QuestionType} from "./question-type.ts";

export type UseQuestionsType = {
    questions: Array<QuestionType>;
    addQuestions: (question: QuestionType) => void;
    removeQuestions: (id: string) => void;
    updateQuestions: (question: QuestionType) => void;
    updateBacUpQuestions: (question: Array<QuestionType>) => void;
    backUp: () => void;
}