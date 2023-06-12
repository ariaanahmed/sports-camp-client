import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/home/home/Home";
import Classes from "../pages/shared/classes/Classes";
import Instructors from "../pages/shared/instructors/Instructors";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Dashboard from "../MainLayout/Dashboard";
import MyCart from "../pages/shared/dashboard/myCart/MyCart";

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
                path: 'login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: 'mycart',
                element: <MyCart/>
            }
        ]
    }
]);