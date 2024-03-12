import Layout from './components/Layout.jsx';
import './App.css';
import { AuthProvider } from "./components/AuthContext.jsx";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </Layout>
        </AuthProvider>
    );
}

export default App;
