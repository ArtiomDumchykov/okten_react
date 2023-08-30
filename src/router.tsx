import { Navigate, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";

import { CarsLayout, MainLayout } from "./layouts";
import { CarsInfoPage, CarsPage, NotFoundPage } from "./pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={ROUTES.CARS}/>
            },
            {
                path: ROUTES.CARS,
                element: <CarsLayout/>,
                children: [
                    {
                        index: true,
                        element: <CarsPage/>
                    },
                    {
                        path: ROUTES.CARS_ID,
                        element: <CarsInfoPage/>
                    }
                ]
                
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])