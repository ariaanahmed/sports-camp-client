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
import MyClasses from "../pages/shared/dashboard/myClasses/MyClasses";
import EnrolledClasses from "../pages/shared/dashboard/enrolledClasses/EnrolledClasses";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../pages/shared/dashboard/paymentHistory/PaymentHistory";
import AdminHome from "../pages/shared/dashboard/adminHome/AdminHome";
import AddAClass from "../pages/shared/dashboard/addAClass/AddAClass";
import MyClassInst from "../pages/shared/dashboard/myClassInst/MyClassInst";
import AllStudents from "../pages/shared/dashboard/allStudents/AllStudents";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
        children: [
            {
                path: 'myclasses',
                element: <MyClasses />
            },
            {
                path: 'enrolledclasses',
                element: <EnrolledClasses />
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory />
            },
            {
                path: 'adminhome',
                element: <AdminHome />
            },
            {
                path: 'addaclass',
                element: <AddAClass/>,
            },
            {
                path: 'myclassinst',
                element: <MyClassInst/>
            },
            {
                path: 'allstudents',
                element: <AllStudents/>
            }
        ]
    }
]);