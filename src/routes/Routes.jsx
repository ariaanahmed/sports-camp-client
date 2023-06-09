import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/home/home/Home";
import Classes from "../pages/shared/classes/Classes";
import Instructors from "../pages/shared/instructors/Instructors";
import Dashboard from "../pages/shared/dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/classes',
                element: <Classes/>
            },
            {
                path: '/instructors',
                element: <Instructors/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
                
            }
        ]
    },
]);