import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { MainLayout } from './layots'
import { NotFoundPage, Part_1, Part_2, Part_3, Part_4, Part_5} from "./pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: ROUTES.PART_1,
                element: <Part_1/>
            },
            {
                path: ROUTES.PART_2,
                element: <Part_2/>
            },
            {
                path: ROUTES.PART_3,
                element: <Part_3/>
            },
            {
                path: ROUTES.PART_4,
                element: <Part_4/>
            },
            {
                path: ROUTES.PART_5,
                element: <Part_5/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])