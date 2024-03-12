import './main-content.scss'
import Quiz from "../quiz/quiz.tsx";
import {Menu} from "../menu/menu.tsx";
import {useQuestions} from "../../hooks/useQuestions.ts";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {ErrorPage} from "../error/error-page.tsx";
import ModifyQuiz from "../modify-quiz/modify-quiz.tsx";

export const MainContent = () => {

    const useQuiz = useQuestions();
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Menu />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/game-quiz",
            element: <Quiz questions={useQuiz.questions}  />
        },
        {
            path: "/modify-quiz",
            element: <ModifyQuiz useQuiz={useQuiz}  />
        },

    ]);

    return (
        <div className="container">
            <RouterProvider router={router} />
        </div>
    );
}

