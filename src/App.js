import "./App.css";
import Logo from "./assets/Logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./components/login";
import CreateAccount from "./components/createAccount";
import Home from "./components/home";
import Profil from "./components/profil";
import CreatePost from "./components/createPost";
import EditProfil from "./components/EditProfil";

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
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/profil" element={<Profil />}></Route>
                    <Route path="/profil/edit" element={<EditProfil />}></Route>
                    <Route path="/addpost" element={<CreatePost />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
