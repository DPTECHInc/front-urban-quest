import "./App.css";
import Logo from "./assets/Logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./components/login";
import CreateAccount from "./components/createAccount";
import CreatePost from "./components/createPost";
import Home from "./components/home";
import Profil from "./components/profil";

function App() {
    // doit on afficher ou non le formulaire de création de post
    // true => oui, false => ne rien afficher

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
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/profil" element={<Profil />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
