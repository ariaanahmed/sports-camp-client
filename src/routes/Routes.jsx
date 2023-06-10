import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/home/home/Home";
import Classes from "../pages/shared/classes/Classes";
import Instructors from "../pages/shared/instructors/Instructors";
import Dashboard from "../pages/shared/dashboard/Dashboard";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

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
                
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    },
]);