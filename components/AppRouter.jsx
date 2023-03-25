import React, {useContext, useState} from 'react';
import {privateRoutes, publicRoutes} from "./router";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";
import NoteList from "./NoteList";
import {AuthContext} from "../context";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <div>Hello world!</div>,
//     },
//     {
//         path: "/login",
//         element: <Login/>,
//     },
//     {
//         path: "/notes",
//         element: <NoteList/>,
//     },
// ]);


const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    console.log(isAuth)

    const router = createBrowserRouter(isAuth
        ? privateRoutes
        : publicRoutes
    );

    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;