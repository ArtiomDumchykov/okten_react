import { Navigate, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";

import { CarsLayout, MainLayout } from "./layouts";
import { CarsInfoPage, CarsPage, LoginPage, NotFoundPage, RegisterPage } from "./pages";

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
            },
            {
                path: ROUTES.AUTH_LOGIN,
                element: <LoginPage/>
            },
            {
                path: ROUTES.AUTH_REGISTER,
                element: <RegisterPage/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])