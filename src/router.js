import { Navigate, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { MainLayout } from './layots'
import { NotFoundPage, PostPage, CommentsPage } from "./pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={ROUTES.TODOS} />
            },
            {
                path: ROUTES.COMMENTS,
                element: <CommentsPage />,
                children: [
                    {
                        path: ROUTES.POST_ID,
                        element: <PostPage />
                    }

                ]
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])