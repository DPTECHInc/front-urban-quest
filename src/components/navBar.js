import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navBar">
            <ul className="myNavUl">
                <li>
                    <Link to="/" className={props.currentRoute === "home" ? "active" : ""}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/login" className={props.currentRoute === "user" ? "active" : ""}>
                        Login / Connexion
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
