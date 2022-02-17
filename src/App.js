import "./App.css";
import Logo from "./assets/Logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./components/login";
import PostLists from "./components/PostLists";
import CreateAccount from "./components/createAccount";
import CreatePost from "./components/createPost";
import { BiCommentAdd } from "react-icons/bi";
import { useState } from "react";

function App() {
    // doit on afficher ou non le formulaire de création de post
    // true => oui, false => ne rien afficher
    const [displayFormCreatePost, setDisplayFormCreatePost] = useState(false);

    const toggleDisplayForm = (event) => {
        // changement de l'affichage du formulaire
        // si oui => non, si non => oui
        setDisplayFormCreatePost(!displayFormCreatePost);
    };

    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <NavBar />
                    <img className="App-logo" alt="profilloginpicture " src={Logo} />
                </header>
                <div className="AddPostSection" onClick={toggleDisplayForm}>
                    <h2 className="TitreAddSection">Nouvelle aventure ?!</h2>
                    <BiCommentAdd size="50" className="AddButton"></BiCommentAdd>
                </div>
                <CreatePost visibility={displayFormCreatePost} />
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
