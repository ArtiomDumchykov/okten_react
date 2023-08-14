import { Navigate, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { MainLayout, RickMortyLayout } from './layots'
import { CarsPage, CharactersPage, EpisodesPage, NotFoundPage, } from "./pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={ROUTES.RICKMORTY}/>
            },
            {
                path: ROUTES.RICKMORTY,
                element: <RickMortyLayout/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to={ROUTES.RICKMORTY_EPISODES}/>
                    },
                    {
                        path: ROUTES.RICKMORTY_EPISODES,
                        element: <EpisodesPage/>
                    },
                    {
                        path: ROUTES.RICKMORTY_CHARACTERS,
                        element: <CharactersPage />
                    },


                ]
            },
            {
                path: ROUTES.CARS,
                element: <CarsPage/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])