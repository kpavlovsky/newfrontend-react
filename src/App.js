import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AuthNavbar from "./components/Navbar";
import './App.css';

function App() {
    return (
        <Router>
            <AuthNavbar></AuthNavbar>
            <Switch>
                <Route path="/sign-in">
                    <SignIn/>
                </Route>
                <Route path="/forgot-password">
                    <ForgotPassword/>
                </Route>
                <Route path="/">
                    <SignUp/>
                </Route>
            </Switch>
        </Router>
    );
}

function SignIn() {
    return <h2>Sign in please</h2>;
}

function SignUp() {
    return <h2>Sign Up please</h2>;
}

function ForgotPassword() {
    return <h2>Forgot password please</h2>;
}

export default App;
