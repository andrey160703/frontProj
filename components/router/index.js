import Login from "../../pages/Login";
import NoteList from "../NoteList";
import React from "react";
import Notes from "../../pages/Notes";
import Index from "../../pages/Index";
import Projects from "../../pages/Projects";

export const privateRoutes = [
    {path: '/tasks', element: <Notes/>, exact: true, errorElement:<Notes/>},
    {path: '/index', element: <Index/>, exact: true, errorElement:<Index/>},
    {path: '/projects', element: <Projects/>, exact: true, errorElement:<Index/>},
    {errorElement: <Projects/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true, errorElement:<Login/>},
    {errorElement:<Login/>, exact: true},
]
