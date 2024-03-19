import Layout from "../components/Layout.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../components/AuthContext/AuthContext.jsx"; // Adjust the path if necessary

const LoginUser = () => {
    const [logUser, setLogUser] = useState({ email: '', password: '' });
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const { login } = useAuth(); // Destructure the login function from the context
    const apiUrl = `${import.meta.env.VITE_API_URL}/login`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(logUser)
        });
        const data = await response.json();

        if (!response.ok) {
            const errArray = data.detail ? data.detail.map(el => `${el.loc[1]} - ${el.msg}`) : [data.message];
            setError(errArray);
        } else {
            setError([]);
            login(data.id);
            navigate(`/${data.id}`);
        }
    };

    const handleChange = (e) => {
        setLogUser({ ...logUser, [e.target.name]: e.target.value });
    };

    const handleLinkClick = (path) => () => {
        navigate(path);
    };

    return (
        <Layout>
            <div className="bg-gray-100 mt-10 p-8 rounded-lg shadow-lg max-w-sm w-full mx-auto font-mono">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" onChange={handleChange}
                               className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                               required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange}
                               className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                               required/>
                    </div>
                    <div className={""}>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md">
                            Login
                        </button>
                        <p className={"mt-4 mb-0 text-center"}><a onClick={handleLinkClick('/register')} style={{cursor: 'pointer'}}>Need to register?</a></p>
                    </div>

                </form>
            </div>
        </Layout>
    );
};

export default LoginUser;
