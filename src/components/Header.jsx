import {Link, NavLink} from "react-router-dom";
import {useAuth} from "./AuthContext.jsx";
import {useEffect, useState} from "react";
const Header = () => {
    const { isLoggedIn, userId, logout } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (isLoggedIn && userId) {
            const url = `http://localhost:3000/${userId}`;
            fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(data => setUserData(data))
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [isLoggedIn, userId]);

    return (
        <nav className={"flex justify-between relative items-center font-mono h-16"}>
            <Link to={"/"} className={"pl-8 text-xl font-bold"}>Logo</Link>
            <div className={"pr-8 font-semibold mx-auto"}>
                {isLoggedIn ? (
                    <div className={"flex items-center space-x-2"}>
                        <NavLink to={`/${userId}`} className={({isActive}) => isActive ? "active-link" : "p-4"}>Home</NavLink>
                        <NavLink to={`/${userId}/building`} className={({isActive}) => isActive ? "active-link" : "p-4"}>Building</NavLink>
                        <NavLink to={`/${userId}/equipment`} className={({isActive}) => isActive ? "active-link" : "p-4"}>Equipment</NavLink>
                        <NavLink to={`/${userId}/employee`} className={({isActive}) => isActive ? "active-link" : "p-4"}>Employee</NavLink>
                        <NavLink to={`/${userId}/contract`} className={({isActive}) => isActive ? "active-link" : "p-4"}>Contract</NavLink>
                        <NavLink to={`/${userId}/finance`} className={"p-4"}>£ {userData?.money}</NavLink>
                    </div>
                ) : (
                    <div className={"flex items-center space-x-2"}>
                        <NavLink to={"/"} className={({isActive}) => isActive ? "active-link" : "p-4"}>Home</NavLink>
                        <NavLink to={"/game"} className={({isActive}) => isActive ? "active-link" : "p-4"}>The Game</NavLink>
                    </div>
                )}

            </div>
            <div className={"pr-8 font-semibold"}>
                {isLoggedIn ? (
                    <div className={"flex items-center space-x-2"}>
                        <NavLink to={`/${userId}/profile`} className={({isActive}) => isActive ? "active-link" : "p-4"}>Profile</NavLink>
                        <button onClick={logout} className="p-4">Logout</button>
                    </div>
                ) : (
                    <div className={"flex items-center space-x-2"}>
                        <NavLink to={"/register"} className={({isActive}) => isActive ? "active-link" : "p-4"}>Sign In</NavLink>
                        <p>/</p>
                        <NavLink to={"/login"} className={({isActive}) => isActive ? "active-link" : "p-4"}>Login</NavLink>
                    </div>
                )}
            </div>
        </nav>
    )
};

export default Header;