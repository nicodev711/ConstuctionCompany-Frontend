import { createContext, useState, useContext } from 'react';
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    const login = (userId) => {
        setIsLoggedIn(true);
        setUserId(userId);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
            {children}
        </AuthContext.Provider>
    );
};
