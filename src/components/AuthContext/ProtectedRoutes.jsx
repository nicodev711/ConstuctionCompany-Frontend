import { Navigate } from 'react-router-dom';
import {useAuth} from "./AuthContext.jsx";


const ProtectedRoute = ({ component: Component }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        // Redirect to the login page or home page if not logged in
        return <Navigate to="/" replace />;
    }

    // Render the component for the protected route
    return <Component />;
};

export default ProtectedRoute;