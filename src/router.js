import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { MainLayout } from './layots'
import { NotFoundPage, Part_1} from "./pages";

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
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])