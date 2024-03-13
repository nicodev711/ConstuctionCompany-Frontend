import Layout from './components/Layout.jsx';
import './App.css';
import { AuthProvider } from "./components/AuthContext.jsx";
import Home from "./pages/home.jsx";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Home/>
            </Layout>
        </AuthProvider>
    );
}

export default App;
