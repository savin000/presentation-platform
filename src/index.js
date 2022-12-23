import './index.css';
import './styles/colors.css';
import './styles/properties.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Calendar from "./routes/Calendar";
import Subscriptions from "./routes/Subscriptions";
import Profile from "./routes/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/calendar",
                element: <Calendar />,
            },
            {
                path: "/subscriptions",
                element: <Subscriptions />,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)