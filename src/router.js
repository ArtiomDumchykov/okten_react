import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import {MainLayout} from './layots'
import { NotFoundPage } from "./pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayout/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])