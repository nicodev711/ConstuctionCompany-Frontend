import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import User from "./pages/User.jsx";
import NewUser from "./pages/NewUser.jsx";
import './index.css';
import App from "./App.jsx";
import LoginUser from "./pages/LoginUser.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path={"/"} element={<App />}/>
                    <Route path={"/register"} element={<NewUser />}/>
                    <Route path={"/login"} element={<LoginUser />}/>
                    <Route path={"/:id"} element={<User />}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
