import "./App.css";
import Logo from "./assets/Logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./components/login";
import PostLists from "./components/PostLists";
import CreateAccount from "./components/createAccount";

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <NavBar />
                    <img className="App-logo" alt="profilloginpicture " src={Logo} />
                </header>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<CreateAccount></CreateAccount>}></Route>
                    <Route path="/" element={<PostLists></PostLists>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
