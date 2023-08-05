import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { MainLayout } from './layots'
import { NotFoundPage, CarsPage, CommentsPage, PostsPage } from "./pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: ROUTES.POSTS,
                element: <PostsPage />,
            },
            {
                path: ROUTES.COMMENTS,
                element: <CommentsPage />,
            },
            {
                path: ROUTES.CARS,
                element: <CarsPage />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])