export type QuestionType = {
    id: string;
    text: string;
    trueAnswer?: string;
    answers: Array<string>;
}