import { Navigate, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { MainLayout } from "./layots";
import { MoviePage, MoviesPage, NotFoundPage } from "./pages";


export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={ROUTES.MOVIES_LIST}/>
            },
            {
                path: ROUTES.MOVIES_LIST,
                element: <MoviesPage />,
            
            },
            {
                path: ROUTES.MOVIE_ID,
                element: <MoviePage />
            },
            {
                path: ROUTES.MOVIE_FILTER_GENRE,
                element: <MoviesPage/>
            },
            {
                path: ROUTES.MOVIE_FILTER_REALESE_DATE,
                element: <MoviesPage/>
            },

        ]
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])






// import { Navigate, createBrowserRouter } from "react-router-dom";

// import { ROUTES } from "./routes";
// import { MainLayout } from './layots'
// import { NotFoundPage, TodosPage, AlbumsPage, PostPage, CommentsPage } from "./pages";

// export const router = createBrowserRouter([
//     {
//         path: ROUTES.MAIN,
//         element: <MainLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <Navigate to={ROUTES.TODOS} />
//             },
//             {
//                 path: ROUTES.TODOS,
//                 element: <TodosPage />
//             },
//             {
//                 path: ROUTES.ALBUMS,
//                 element: <AlbumsPage />
//             },
//             {
//                 path: ROUTES.COMMENTS,
//                 element: <CommentsPage />,
//                 children: [
//                     {
//                         path: ROUTES.POST_ID,
//                         element: <PostPage />
//                     }

//                 ]
//             },
//         ]
//     },
//     {
//         path: "*",
//         element: <NotFoundPage />
//     }
// ])