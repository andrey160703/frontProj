import React, {useState} from "react";
import Counter from "./components/Counter";
import Note from "./components/Note";
import NoteList from "./components/NoteList";
import NewNoteButton from "./components/UI/NewNoteButton";
import Login from "./pages/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MyInput from "./components/UI/MyInput";
import {privateRoutes, publicRoutes} from "./components/router";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import {AuthContext, LoginContext} from "./context";
import TestComponent from "./components/TestComponent";
import Header from "./components/Header";
import MyButton from "./components/UI/MyButton";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [globalLogin, setGlobalLogin] = useState('test@mail.ru')


    return (
        // <div>
        //     <MyButton style={{margin: '10px 10px'}} onClick={data => console.log(data)}>
        //         sss
        //     </MyButton>
        // </div>


        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <LoginContext.Provider value={{
                globalLogin,
                setGlobalLogin
            }}>
                <AppRouter/>
            </LoginContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
